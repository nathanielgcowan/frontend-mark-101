import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchBands, deleteBand, likeButton } from "../actions/bandActions";
import BandForm from "./BandForm";
import { Link } from 'react-router-dom';
import Band from '../components/Band';

class Bands extends Component {
    componentDidMount() {
        this.props.fetchBands();
    }

    handleClick = (event) => {
        this.props.deleteBand(event.target.value);
    };

    handleUpvote = (event) => {
        this.props.likeButton(event.target.value);
    };

    render() {
        console.log(this.props)
        const listOfBands = this.props.bands.map((band) => {
            return (
                <div key={band.id}>
                    <Link to={`/bands/${band.id}`}>
                        <Band name={band.name} genre={band.genre} likes={band.likes}/>
                        <button onClick={this.handleClick} value={band.id}>Delete</button>
                        <button onClick={this.handleUpvote} value={band.id}>Like</button>
                    </Link>
                </div> ); });
        return (
            <div>
                <BandForm />
                {listOfBands}
            </div>
        ); } }

Bands.propTypes = {
    fetchBands: PropTypes.func.isRequired,
    bands: PropTypes.array.isRequired,
    newBand: PropTypes.func,
};

const mapStateToProps = (state) => ({
    bands: state.bands.bands,
});

export default connect(mapStateToProps, { fetchBands, deleteBand, likeButton })( Bands );
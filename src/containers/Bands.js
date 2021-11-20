import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchBands, deleteBand, likeButton } from "../actions/bandActions";
import BandForm from "./BandForm";
import Band from '../components/Band';

class Bands extends Component {
    componentDidMount() {
        this.props.fetchBands();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newBand) {
            this.props.bands.unshift(nextProps.newBand);
        }
    }

    handleClick = (event) => {
        this.props.deleteBand(event.target.value);
    };

    handleLikeButtonClick = (event) => {
        this.props.likeButton(event.target.value);
    };

    render() {
        console.log(this.props);
        console.log(this.props.bands);
        const listOfBands = this.props.bands.map((band) => {
            return (
                <div key={band.id}>
                    <Band name={band.name} genre={band.genre} rating={band.rating}/>
                    <button onClick={this.handleClick} value={band.id}>Delete</button>
                    <button onClick={this.handleLikeButtonClick} value={band.id}>Like</button>
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

export default connect(mapStateToProps, { fetchBands, deleteBand, likeButton })(
    Bands
);

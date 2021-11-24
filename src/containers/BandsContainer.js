import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchBands, deleteBand, likeButton } from "../actions/bandActions";
import BandForm from "./BandForm";
import { Link } from 'react-router-dom';
import BandCard from "../components/BandCard";

class BandsContainer extends Component {
    componentDidMount() {
        this.props.fetchBands();
    }
    
    handleClick = (event) => {
        this.props.deleteBand(event.target.value);
    };
    
    handleUpvote = (event) => {
        this.props.likeButton(event.target.value);
    };
    
    render(){
        return(
            <div>
                <Link to={}>Add New</Link>
                {this.props.bands.map(b=>{
                    return(
                        <div style={{border:'1px solid black'}}>
                            <h1>{b.name}</h1>
                            <p>{b.genre}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}

BandsContainer.propTypes = {
    fetchBands: PropTypes.func.isRequired,
    bands: PropTypes.array.isRequired,
    newBand: PropTypes.func,
};

const mapStateToProps = (state) => ({
    bands: state.bands.bands,
});

export default connect(mapStateToProps, { fetchBands, deleteBand, likeButton })( BandsContainer );
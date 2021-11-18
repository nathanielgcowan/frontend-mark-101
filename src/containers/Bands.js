import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchBands } from '../actions/bandActions';
import BandForm from './BandForm';

class Bands extends Component {

    componentDidMount() {
        this.props.fetchBands();
    }


    render() {
        console.log(this.props.bands);
        const listOfBands = this.props.bands.map(band =>
            <div>{band.name}</div>
            )
        return (
            <div>
                <BandForm />
                { listOfBands }
            </div>
        )
    }
}

Bands.propTypes = {
    fetchBands: PropTypes.func.isRequired,
    bands: PropTypes.array.isRequired,
    newBand: PropTypes.object
}

const mapStateToProps = state => ({
    bands: state.bands.plural,
    newBand: state.posts.singular
});

export default connect(mapStateToProps, { fetchBands })(Bands);
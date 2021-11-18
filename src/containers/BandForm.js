import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { newBand } from '../actions/bandActions'

class BandForm extends Component {
    constructor(props) {
        super(props)
        this.state ={
            name: '',
            genre: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });}

    onSubmit(e) {
        e.preventDefault();
        const band = {
            name: this.state.name,
            genre: this.state.genre
        };
        this.props.newBand(band);
        console.log(band)
    }

    render() {
        return (
            <div>
                <h2>AddBand</h2>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Name:</label><br />
                        <input type='text' name="name" onChange={this.onChange} value={this.state.name} />
                    </div>
                    <div>
                        <label>Genre:</label><br />
                        <input type='text' name="genre" onChange={this.onChange} value={this.state.genre} />
                    </div><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

BandForm.propTypes = {
    newBand: PropTypes.func.isRequired
};

export default connect(null, { newBand })(BandForm);
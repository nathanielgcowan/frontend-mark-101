import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { newBand } from '../actions/bandActions'

const BandForm = (props) => {
console.log(props);
    // constructor(props) {
    //     super(props)
    //     this.state ={
    //         name: '',

    //     };
    //     this.onChange = this.onChange.bind(this);
    //     this.onSubmit = this.onSubmit.bind(this);
    // }

    // onChange(e) {
    //     this.setState({ [e.target.name]: e.target.value });}

    // onSubmit(e) {
    //     e.preventDefault();
    //     console.log(this.state)
    //     const band = {
    //         name: this.state.name,
    //         genre: this.state.genre,
    //         likes: this.state.likes
    //     };
    //     this.state.props.newBand(band);
    //     console.log(band)
    // }

        return (
            <div>
                <h2>AddBand</h2>
                <form>
                    <div>
                        <label>Name:</label><br />
                        <input type='text' name="name" />
                    </div>
                    <div>
                        <label>Genre:</label><br />
                        <input type='text' name="genre" />
                    </div><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
}

BandForm.propTypes = {
    newBand: PropTypes.func.isRequired
};

export default connect(null, { newBand })(BandForm);
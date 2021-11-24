import React, { Component } from "react"

export default class BandCard extends Component {
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.genre}</p>
                <p>{this.props.likes}</p>
            </div>
        );
    }
}
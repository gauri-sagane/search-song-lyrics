import React, {Component} from "react";
import axios from 'axios';
import {Consumer} from '../../context';

class Search extends Component {
    state = {
        trackTitle: ''
    }

    render() {
        return (
            <Consumer>
                {value => {
                    return (
                        <div className="card card-body mb-4 p-4">
                            <h1 className="display-4 text-center">
                            <i class="fa fa-music"> Search For a Song</i>
                            </h1>
                            <p className="lead text-center">Get the Lyrics for any Song</p>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Search;
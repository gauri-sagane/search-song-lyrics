import React, {Component} from "react";
import axios from 'axios';
import {Consumer} from '../../context';

class Search extends Component {
    state = {
        trackTitle: ''
    };

    onChange = e => {
        this.setState({[e.taregt.name]: e.target.value})
    }

    render() {
        return (
            <Consumer>
                {value => {
                    return (
                        <div className="card card-body mb-4 p-4">
                            <h1 className="display-4 text-center">
                            <i className="fa fa-music"> Search For a Song</i>
                            </h1>
                            <p className="lead text-center">Get the Lyrics for any Song</p>
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="Song title..." name="trackTitle" value={this.state.trackTitle} onChange={this.onChange} />
                                </div>
                                <button className="btn btn-dark btn-lg btn-block mb-5" type="submit">Get Track Lyrics</button>
                            </form>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Search;
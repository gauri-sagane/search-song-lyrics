import React from "react";
import {Link} from 'react-router-dom';

const Track = (props) => {
    const {track} = props;
    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>{track.artist_name}</h5>
                    <p className="card-text">
                        <strong><i className="fa fa-play"> Track</i></strong>: {track.track_name}
                        <br/>
                        <strong><i className="fa fa-spotify"> Album</i></strong>: {track.album_name}
                    </p>
                    <Link to={`/lyrics/tracks/${track.track_id}`} className="btn btn-dark btn-block"><i className="fa fa-chevron-right"> View Lyrics</i></Link>
                </div>
            </div>
        </div>
    )
}

export default Track;
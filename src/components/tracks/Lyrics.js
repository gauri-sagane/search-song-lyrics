import React, {Component} from "react";
import axios from "axios";
//import { useParams } from "react-router-dom";
import  withRouter from "./withRouter";

class Lyrics extends Component {
    state = {
        track: {},
        lyrics: {}
    };

    componentDidMount(){
        
        axios.get(`https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
        )
        .then(res => {
            console.log(res.data)
            //this.setState({track_list: res.data.message.body.track_list});
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h1>Lyrics</h1>
            </div>
        )
    }
}

export default withRouter(Lyrics);
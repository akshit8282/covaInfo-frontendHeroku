import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import videojs from 'video.js';
import './videojs.css';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      videoJsOptions: null
    }
  }

  componentDidMount() {
    axios.get('https://covainfo-2.herokuapp.com/api/videoList', {
      headers: {
        'Content-Type': 'application/json',
       
      }
    }).then(res => {
        console.log(res)
      res.data.map(video => {
        if (video.upload_title === this.props.match.params.videoTitle) {
          console.log(video.video_path.trim().split("\\")[2])
          this.setState({
            loaded: true,
            videoJsOptions: {
              autoplay: false,
              controls: true,
              sources: [{
                src:'https://covainfo-2.herokuapp.com/api/videos/'+video.video_path.trim().split("/")[1]
              }]
            }
          }, () => {
            this.player = videojs(this.videoNode, this.state.videoJsOptions, function onPlayerReady() {
              // console.log('onPlayerReady', this)
            });
          });
        }
      });
    }).catch(err=>{
        console.log(err);
    });
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  render() {
   
    return (
      
        <div className="row" style={{ width: "45vw",height:"20vw" }}>
          <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8 mx-auto mt-5">
            {this.state.loaded ? (
              <div data-vjs-player>
                <video ref={node => this.videoNode = node} className="video-js vjs-big-play-centered" />
              </div>
            ) : ' Loading ... '}
          </div>
        </div>
    
    );
  }
}

export default VideoPlayer;
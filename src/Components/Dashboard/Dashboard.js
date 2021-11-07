import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import './Dashboard.css';
import Navbar from '../Navbar/Navbar'


class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    

    this.state = {
     
      videoList: []
    }
  }

  componentDidMount() {
    
      axios.get('https://covainfo-2.herokuapp.com/api/videoList', {
        headers: {
          'Content-Type': 'application/json',
         
        }
      }).then(res => {
        console.log(res);
        this.setState({
          videoList: res.data
        });
      });
    }
  

  render() {
   
    const path='https://covainfo-2.herokuapp.com/api/videos/video_thumbnails/'

    const videos = this.state.videoList.length!=0?this.state.videoList.map(video => {
      return (
        <div className=" video col-xs-12 col-sm-12 col-md-3 col-lg-4 py-3 container1" key={video._id}>
          <div>
          <Link to={'/video/' + video.upload_title}>
            <div className="video-thumbnail1">
              <img src={path+video.thumbnail_path}  />
            </div>
          </Link>
          </div>
          <div>
          <span className="username1">
            <Link to={'/video/' + video.upload_title}>
              {video.uploader_name}
            </Link>
          </span>
          </div>
          <div>
          <span className="video-title1">{video.upload_title.replace(/_/g, ' ')}</span></div>
        </div>
      );
    }):(<h2>No videos Avaible</h2>);

    return (
     <React.Fragment>
       <Navbar/>
       <h5 style={{backgroundColor:"greenyellow",marginTop:'100px'}}><marquee>To upload Your video,SignIn To The Portal</marquee></h5>
        <div className="container mt-5">
         
          <h1>How to Stay Healthy</h1>
          <hr className="my-4" />

          <div className=" maincontainer">
            {videos}
          </div>
        </div>
      
        </React.Fragment>
    );
  }
}

export default Dashboard;
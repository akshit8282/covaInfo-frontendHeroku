import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import '../Dashboard/Dashboard.css';
import Navbar from '../Navbar/Navbar'
import './PersonalDashboard.css';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    

    this.state = {
     
      videoList: []
    }
  }

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('userTokenTime'));
    
      axios.get('https://covainfo-2.herokuapp.com/api/videoList', {
        headers: {
          'Content-Type': 'application/json',
          'id': JSON.parse(localStorage.getItem('userTokenTime')).userName
        }
      }).then(res => {
       
        this.setState({
          videoList: res.data
        });
      });
    }
  

  render() {
const deleteVideo=(id)=>{
console.log(id);

axios.delete('https://covainfo-2.herokuapp.com/api/videoList/deleteVideo/'+id, {
    headers: {
      'Content-Type': 'application/json',
      
    }
  }).then(res => {
    window.location.replace('/personaldashboard');
    
  });

}   
const path='https://covainfo-2.herokuapp.com/api/videos/video_thumbnails/'
    const videos = this.state.videoList.length!=0?this.state.videoList.map(video => {
      return (
        <div className="video col-xs-12 col-sm-12 col-md-3 col-lg-4 py-3" key={video._id}>
          <Link to={'/video/' + video.upload_title}>
            <div className="video-thumbnail">
              <img src={path+video.thumbnail_path} />
            </div>
          </Link>
          <span className="username">
            <Link  to={'/video/' + video.upload_title}>
              {video.uploader_name}
            </Link>
          </span>
          <span className="video-title">{video.upload_title.replace(/_/g, ' ')}</span>
          <br></br><br></br>
          <button className="deletebtn" onClick={()=>deleteVideo(video._id)}>delete</button>
        </div>
      );
    }):(<h2>No Video Available!</h2>);

    return (
     <React.Fragment>
       <Navbar/>
       <h5 style={{backgroundColor:"greenyellow",marginTop:'100px'}}><marquee>To upload Your video,SignIn To The Portal</marquee></h5>
        <div className="container mt-5">
         
          <h1>How to Stay Healthy</h1>
          <hr className="my-4" />

          <div className="streams row py-4">
            {videos}
          </div>
        </div>
      
        </React.Fragment>
    );
  }
}

export default Dashboard;
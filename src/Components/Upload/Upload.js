import React from 'react';

import { Progress } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import './Upload.css';
import Navbar from '../Navbar/Navbar';


class Upload extends React.Component {
  state = {
    selectedVideos: null,
    loaded: 0,
    ok:true,
    ee:""
  }

  maxSelectFile(event) {
    let files = event.target.files;
    if (files.length > 1) {
      toast.error('Maximum 1 file is allowed');
      event.target.value = null;
      return false;
    } else {
      let err = '';
      for (let i = 0; i < files.length; i++) {
        if (files[i].size > 52428800) { // 50 MB
          err += files[i].name + ', ';
        }
      }
      if (err !== '') {
        // error caught
        event.target.value = null;
        toast.error(err + " is/are too large. Please select file size < 50Mb");
      }
    }
    return true;
  }

  fileChangeHandler(event) {
    const files = event.target.files;
    if (this.maxSelectFile(event)) {
      this.setState({
        selectedVideos: files,
        loaded: 0
      });
    }
  }
  
  fileUploadHandler(event) {
    const data = new FormData();
    for (let i = 0; i < this.state.selectedVideos.length; i++) {
      data.append('file', this.state.selectedVideos[i]);
    }

    const options={
      onUploadProgress: ProgressEvent => {
        console.log(ProgressEvent);
        this.setState({
          loaded: (ProgressEvent.loaded / ProgressEvent.total * 100),
        
        });
    
  }
}
//using fetch api

/*const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json','Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('userTokenTime')).token },
  
  body: new URLSearchParams(data),
  options:options
};
fetch('http://127.0.0.1:3000/api/upload', requestOptions)
  .then(response => {
    console.log(response)
    
   
  })
  .catch(err=>{
   console.log(err);
  })
*/
//console.log(JSON.parse(localStorage.getItem('userTokenTime')).token);
    axios.post('https://covainfo-2.herokuapp.com/api/upload', data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('userTokenTime')).token
      }
    },options).then(res => {
     console.log(res);
     toast.success(`uploaded`); 
     
    }).catch(err => {
      this.setState({
        ok:false,
        ee:err
      })
        console.log(err);
      toast.error(`Upload Fail with status: ${err.statusText}`);
    });
    setTimeout(() => {  console.log("World!"); }, 100000);
    if(this.state.ok&&this.state.ee==""){
      
     
     
      this.setState({
        loaded:100
      })
     
    }
   
  }
 

  render() {

    if (!localStorage.getItem('userTokenTime')) return <Redirect to="/signIn" />
   
    return (
    
        <React.Fragment>
          <Navbar/>
        <div className="container mt-5">
          <div className="form-group">
            <ToastContainer />
          </div>
          <h4>Upload Video</h4>
          <hr className="my-4" />

          <form method="post" name="videoUpload" action="/api/upload" id="#" encType="multipart/form-data">
            <div className="form-group files">
              <label>Upload Your Videos Here</label>
              <input
                type="file"
                name="file"
                className="form-control"
                multiple="multiple"
                accept="video/*"
                onChange={this.fileChangeHandler.bind(this)} />
              <Progress max="100" color="success" value={this.state.loaded} className="mt-4 mb-1">
                {isNaN(Math.round(this.state.loaded, 2)) ? 0 : Math.round(this.state.loaded, 2)}%
              </Progress>
              <button
                type="button"
                className="btn btn-success btn-block"
                onClick={this.fileUploadHandler.bind(this)
                
                }>Upload Video
              </button>
           
            </div>
          </form>
          <h3 style={{color:'red',textAlign:'center'}}>Please Wait Till the Notification Pops Up!</h3>
        </div>
      </React.Fragment>
    );
  }
}

export default Upload;
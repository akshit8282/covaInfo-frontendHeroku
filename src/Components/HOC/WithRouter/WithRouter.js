import {useParams} from 'react-router-dom'
import React from 'react'
const WithRouter = WrappedComponent => {
   
   
    
     function NewComponent() {
         const {videoTitle}=useParams();
         console.log(videoTitle);
        return (
            <WrappedComponent videoTitle={videoTitle}/>
        )
    }
    return NewComponent;
  
   

      

  };
  export default WithRouter
  
 
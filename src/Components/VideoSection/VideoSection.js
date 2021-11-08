import React from 'react'
import './VideoSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

function VideoSection() {
    return (
        <div>
            <br></br>
            <h1>Advisory Videos For Our People!</h1><br></br>
            <div id="videoSectiondiv">
            <iframe width="400" height="270" src="https://www.youtube.com/embed/vm0eaW24EpE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="500" height="300" src="https://www.youtube.com/embed/xTvd7oAEyhs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="400" height="270" src="https://www.youtube.com/embed/B9fnhh737W4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Link style={{ display:'flex',justifyContent:'center',textDecoration:"none",fontFamily:'serif',fontSize:'30px',}} to="/dashboard"><span style={{border:'2px solid black',marginTop:'90px',borderRadius:"30px",height:'50px',width:'100px',textAlign:'center',backgroundColor:'black',color:"white"}}><FontAwesomeIcon icon={faArrowAltCircleRight} /></span></Link>
            </div>
            <div id="design1">
            <div id="design"></div>
            <div id="awarenessdiv"><h2>Aware The World!!</h2>
<div>
            <h5><cite >“Keep your face always toward the sunshine, and shadows will fall behind you.”
</cite>— Walt Whitman</h5>
            <p>It’s tough to know how to help during this coronavirus pandemic.<br></br> You may find that you have more time on your hands right now than ever. You might even be out of work with nothing to do and nowhere to go.</p>
            <p>There are so many difficult things we're living through in the world today,<br></br> so many horrible events, but we cannot let them stop us. No matter what happens, I feel you must move forward with optimism and not get totally sideswiped.</p>

            <h3 style={{}}>Upload Your Own Video</h3>
           
            <Link to="/upload" style={{color:'inherit'}}><i  className="fas fa-file-video fa-4x" ></i></Link>
            </div>
            </div>
           </div>
        </div>

    )
}

export default VideoSection

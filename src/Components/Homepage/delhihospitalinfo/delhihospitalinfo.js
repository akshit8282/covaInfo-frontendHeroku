import React from 'react'
import {Link} from 'react-router-dom'
import './delhihospitalinfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
function delhihospitalinfo() {
    return (
        <div>
            <hr style={{height:"6px",width:"55%",margin:"auto",marginTop:"50px",backgroundColor:"darkblue",borderRadius:"9px"}}/>
            <br>
            </br>
            <h1 style={{textAlign:'center',fontFamily:'monospace'}}> To All Delhi People!</h1><br></br>
       <div id="contentdiv"  >     
       <img src="https://images.livemint.com/img/2021/07/11/600x338/20210706_DLI-HT-MN_Kejriwal-001_1625904538312_1625995704134.jpg"/>
            <div id="contentdivtext" >
                
                <h2 className="container-fluid contentdivheading" id="">Now U can check Corona Beds Available In All Hospital</h2>
                <h4 className="container" id="content">Here is our new feature added.<br></br>Finding hospital with no of bed occupied 
                <br></br>and All the information well updated and taken from<br></br> official Government Site.<br></br>
                Click down to View All Info!!
                </h4>
                <Link style={{ display:'flex',justifyContent:'center',textDecoration:"none",fontFamily:'serif',fontSize:'30px',}} to="/bed"><span style={{border:'2px solid black',borderRadius:"30px",width:'100px',textAlign:'center',backgroundColor:'black',color:"white"}}><FontAwesomeIcon icon={faArrowAltCircleRight} />
</span></Link>
            </div>


</div>

        </div>
    )
}

export default delhihospitalinfo

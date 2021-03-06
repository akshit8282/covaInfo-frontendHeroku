import React from 'react';




export default function MediaCard(props) {
 
  
  return (
    <div className="container-fluid" >    <div class="card text-white  mb-3 mt-3" style={{maxWidth:'30rem',height:'15rem',borderRadius:'30px',backgroundColor:`${props.backgroundcolor}`}}>
  <div class="card-header" style={{textAlign:'center',fontSize:'2rem',}}>{props.header}</div>
  <div style={{display:'flex',justifyContent:'space-between'}}>
  <div class="card-body" >
    <h5 class="card-title" style={{fontSize:'1.4rem'}}>{props.confirmedcases}</h5>
    <p class="card-text" style={{textAlign:'center'}} >{props.cases}</p>
  </div>
  <div class="card-body">
    <h5 class="card-title"  style={{fontSize:'1.4rem'}}>{props.confirmeddeaths}</h5>
    <p class="card-text" style={{textAlign:'center'}}>{props.deaths}</p>
  </div>
  </div>
</div>

</div>
    
    
  );
}
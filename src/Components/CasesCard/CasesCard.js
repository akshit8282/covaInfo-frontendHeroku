import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useTheme } from "@material-ui/styles";




export default function MediaCard(props) {
 
  
  return (
    <div className="container-fluid" >    <div class="card text-white  mb-3 mt-3" style={{maxWidth:'30rem',height:'15rem',borderRadius:'30px',backgroundColor:`${props.backgroundcolor}`}}>
  <div class="card-header" style={{textAlign:'center',fontSize:'2rem',}}>{props.header}</div>
  <div style={{display:'flex',justifyContent:'space-between'}}>
  <div class="card-body" >
    <h5 class="card-title" style={{fontSize:'1.4rem'}}>{props.confirmedcases}</h5>
    <p class="card-text" style={{textAlign:'center'}} >123445555</p>
  </div>
  <div class="card-body">
    <h5 class="card-title"  style={{fontSize:'1.4rem'}}>{props.confirmeddeaths}</h5>
    <p class="card-text" style={{textAlign:'center'}}>12334455</p>
  </div>
  </div>
</div>

</div>
    
    
  );
}
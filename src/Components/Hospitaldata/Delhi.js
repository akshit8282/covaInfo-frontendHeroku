import React, { Component } from 'react'

import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import {Link} from 'react-router-dom'
export class Delhi extends Component {
    
    state={
        result:null,
        
    }
    componentDidMount=()=>{
        axios.get('https://cors-anywhere.herokuapp.com/https://coronabeds.jantasamvad.org/covid-info.js', {headers: {'Access-Control-Allow-Origin': '*'},
    }).then(res=>{
       
var obj=res.data.split("=")[1];
obj=obj.split(";")[0];
var data=JSON.parse(obj).beds;


    this.setState({
        result:data
    })
    
    
}).catch(err=>{
    console.log(err);
})


    }
    render() {
        let url=`/data/`;






const arr=this.state.result!=null?(Object.keys(this.state.result).map(key=>{
return <tr  style={{fontSize:'1.1rem'}} >
    <td ><Link  style={{color:'white'}} to={url+key}  key={key}>{key.split(",")}</Link></td>
    <td >{this.state.result[key].total}</td>
    <td >{this.state.result[key].vacant}</td>
    <td >{this.state.result[key].last_updated_at}</td>
</tr>
})):( <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}><i  className="fas fa-spinner fa-spin fa-5x"></i></div>)

        return (
            <div>
               <Navbar/>
               <h3 className="bg-success text-white" style={{marginTop:'90px'}}><marquee>This Information is taken from Government Website</marquee></h3>
               <h1>Delhi Hospital Vacant Bed Data</h1>
               <div className="container" >
             
            <table className="table table-striped table-dark table-lg table-sm table-hover"   >
                <thead style={{fontSize:'1.3rem',fontFamily:'cursive'}}>
<th >Hospital</th>
<th   >Total Bed</th>
<th  >Vacant Bed</th>
<th  >Updated At</th>
            </thead>
            <tbody>
            {arr}
            </tbody>
              </table> 
               
            </div>
            </div>
        )
    }
}

export default Delhi

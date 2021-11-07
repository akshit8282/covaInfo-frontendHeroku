import React, { Component } from 'react'

import Navbar from '../Navbar/Navbar'
import axios from 'axios'
export class Delhi extends Component {
    
    state={
        result:null,
        
    }
    componentDidMount=()=>{
        axios.get('https://coronabeds.jantasamvad.org/covid-info.js', {headers: {'Access-Control-Allow-Origin': '*'},
    }).then(res=>{
        //console.log(res.data);
     //console.log((res.data.split("=")[1]));
var obj=res.data.split("=")[1];
obj=obj.split(";")[0];
var data=JSON.parse(obj).beds;


    this.setState({
        result:data
    })
    
    
}).catch(err=>{
    console.log(err);
})
//information of hospital

    }
    render() {
        let url=`/data/`;
/*const getinfo=(key)=>{
    axios.get('https://cors-anywhere.herokuapp.com/https://coronabeds.jantasamvad.org/covid-facilities.js', {headers: {'Access-Control-Allow-Origin': '*'},
}).then(res=>{
    //console.log(res.data);
 //console.log((res.data.split("=")[1]));
var obj=res.data.split("= ")[1];
obj=obj.split(";")[0];
var data=JSON.parse(obj);
var ele;
Object.keys(data).map(k=>{
    if(k==key){

     ele=data[k];
        }
})
 this.setState({
address:ele
 });
 console.log(this.state.address);

}).catch()
}*/





const arr=this.state.result!=null?(Object.keys(this.state.result).map(key=>{
return <tr  style={{fontSize:'1.1rem'}} >
    <td ><a  style={{color:'white'}} href={url+key}  key={key}>{key.split(",")}</a></td>
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

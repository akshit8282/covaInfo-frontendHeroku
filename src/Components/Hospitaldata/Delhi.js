import React, { Component } from 'react'
import Hospitaladdress from './hospitaladdress/hospitaladdress'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import './delhi.css';
import Backdrop from '../Backdrop/Backdrop'
export class Delhi extends Component {
    
    state={
        result:'loading data',
        address:null
    }
    componentDidMount=()=>{
        axios.get('https://cors-anywhere.herokuapp.com/https://coronabeds.jantasamvad.org/covid-info.js', {headers: {'Access-Control-Allow-Origin': '*'},
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


if(!this.state.result) return <h1>loading</h1>


const arr=Object.keys(this.state.result).map(key=>{
return <div id="table" className="row border p-3"  >
    <div className="col"><a href={url+key} style={{color:"black",fontSize:"20px"}} key={key}>{key.split(",")}</a></div>
    <div className="col">{this.state.result[key].total}</div>
    <div className="col">{this.state.result[key].vacant}</div>
    <div className="col">{this.state.result[key].last_updated_at}</div>
</div>
})

        return (
            <div>
               <Navbar/>
               <h3 className="bg-success text-white"><marquee>This Information is taken from Government Website</marquee></h3>
               <h1>Delhi Hospital Vacant Bed Data</h1>
               <div className="container-fluid" >
             <div  >
            <div className="row bg-secondary text-white mb-3"   >
<div className="col" style={{fontSize:"30px"}}><b>Hospital</b></div>
<div className="col" style={{fontSize:"30px"}} ><b>Total Bed</b></div>
<div className="col" style={{fontSize:"30px"}}><b>Vacant Bed</b></div>
<div className="col" style={{fontSize:"30px"}}><b>Updated At</b></div>
            </div>
            <div style={{height:"10px"}}></div>
            {arr}
              </div> 
              </div> 
            </div>
        )
    }
}

export default Delhi

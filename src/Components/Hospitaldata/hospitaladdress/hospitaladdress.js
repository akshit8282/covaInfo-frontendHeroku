
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './hospitaladdress.css'


const Hospitaladdress = (props) => {
    const [address, setaddress] = useState({});
    const [loading, setloading] = useState(true);
    const path=props.location.pathname.split('/')[2];
    
    useEffect(async () => {
        // Update the document title using the browser API
        await axios.get('https://cors-anywhere.herokuapp.com/https://coronabeds.jantasamvad.org/covid-facilities.js', {headers: {'Access-Control-Allow-Origin': '*'},
}).then(res=>{
    
 //console.log((res.data.split("=")[1]));

var obj=res.data.split("= ")[1];
obj=obj.split(";")[0];
var data=JSON.parse(obj);
var ele;

Object.keys(data).map(k=>{
    if(k==path){

     ele=data[k];

        }
})

 setaddress(ele);
 setloading(false);
 console.log(ele);

}).catch()
      },[]);

    const arr=Object.keys(address).map(a=>{
        return <div > 
        
    {a=="location"?null:a=="contact_numbers"?<div>
            <h2><b>{a}:-</b></h2>
            <h6>{address[a][0]}</h6>
            <h6>{address[a][1]}</h6>
        </div>:<div><h2><b>{a}</b> :-</h2>
        <p>{address[a]}</p>
        </div>}
        
                
                
                
            
        </div>
    })
    const model=loading==true?(<div class="loader"></div>): (
        
        <div style={{backgroundColor:"lightcyan",height:"90vh"}}>
        <h1 style={{textAlign:'center'}}>{path}</h1>
            {arr}
            <button style={{width:"50px",borderRadius:"10px",backgroundColor:"darkblue"}}><a style={{textDecoration:"none",color:"white"}} href="/bed">Back</a></button>
        </div>
    );
    return <div style={{backgroundColor:'black',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>{model}</div>
    /*return(
<div>
    <h1>hlo</h1>
</div>
    );*/
}

export default Hospitaladdress

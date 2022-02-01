
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './hospitaladdress.css'
import {useLocation} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Navbar from '../../Navbar/Navbar';
import doctor from '../../../images/doctoraddress.png';;





const Hospitaladdress = (props) => {
    const [address, setaddress] = useState({});
    const [loading, setloading] = useState(true);
    
    const a=useLocation();
    const path=a.pathname.split('/')[2].split('%20').join(" ");
   
    useEffect(async () => {
        
        await axios.get('https://cors-anywhere.herokuapp.com/https://coronabeds.jantasamvad.org/covid-facilities.js', {headers: {'Access-Control-Allow-Origin': '*'},
}).then(res=>{
    


var obj=res.data.split("= ")[1];
obj=obj.split(";")[0];
var data=JSON.parse(obj);
var ele;

Object.keys(data).map(k=>{
    if(k==path){

     ele=data[k];

        }
})
console.log(ele)
 setaddress(ele);
 setloading(false);
 console.log(ele);

}).catch()
      },[]);

    const arr=address!=undefined?Object.keys(address).map(a=>{
        return <div > 
        
    {a=="location"?null:a=="contact_numbers"?<div><table className="tabledesign">
            <tr><td><b>{a}</b></td>&nbsp;&nbsp;&nbsp;<td>
            {address[a][0]}
            </td></tr></table>
        </div>:<div><table className="tabledesign"><tr><td><b>{a}</b></td>&nbsp;&nbsp;&nbsp;
        <td>{address[a]}</td>
        </tr>
        </table></div>}
        
                
                
                
            
        </div>
    }):null;
    const model=loading==true?(<div className="loadingScreen"><div className="spinner-grow text-"></div><div className="spinner-grow text-info"></div><div className="spinner-grow text-dark"></div></div>): (
        
        <div> <Navbar/>
        <div style={{margin:'15%',display:'flex',alignItems:'center',justifyContent:'center',alignContent:'center'}}>
    <div style={{height:'50%',width:'50%'}}><img style={{height:"100%",width:"100%"}} src={doctor}/></div>
    <div className="address">
    <h3>{path}</h3>
    {arr}
    
    </div>
            </div><div style={{display:'flex',justifyContent:"center",margin:'-12%'}}>
            <button className='backbutton'><Link className="link" to="/bed">Back</Link></button></div>
            </div>
       
    

    );
    return (<div>{model}</div>)
    
}

export default Hospitaladdress

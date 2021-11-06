import React, { Component } from 'react'
import axios from 'axios'
import './Vaccine.css'
import MediaQuery from 'react-responsive'
export class VaccineCenter extends Component {
    state={
        pincode:'',
        date:'',
        result:[],
        searched:false
    }
    handleChange=(e)=>{
       
        e.target.name==='pincode'?(this.setState({pincode:e.target.value})):(this.setState({date:e.target.value}));
        
    }
    
   
      
    submihandler=async (e)=>{
        e.preventDefault();
        var arr=this.state.date.split('-');
        this.state.date='';
        this.state.date+=arr[2]+"-"+arr[1]+"-"+arr[0];
        await axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${this.state.pincode}&date=${this.state.date}`).then(res=>{
            console.log(res);
            this.setState({result:res.data.sessions});
        }).catch(err=>{
            console.log(err);
        })
        this.setState({searched:true});
      
     console.log(this.state.result);
      
    }
    render() {
        var arr=this.state.searched?<h6>No center found</h6>:null;
       var brr= this.state.result.length!=0?(
           
            this.state.result.map(res=>{
               return(res.available_capacity!=0?
                <MediaQuery minWidth={1000}>
                {/* You can also use a function (render prop) as a child */}
                {(matches) =>
                  matches
                    ? <tr style={{borderBottom:'1px solid',padding:'10px'}}>
                    <td style={{color:'red',borderRadius:'5px',fontSize:'30px'}}> {res.vaccine}<br></br><span style={{backgroundColor:'royalblue',color:'wheat',borderRadius:'5px',fontSize:'20px'}}>{res.fee_type} {res.min_age_limit}+</span></td>
                    <td>
                        <b>
                        {res.address}
                    </b><br></br>
                    {res.name}
                    </td>
                
                
                <td>
               
                    <div id="" style={{display:'flex'}}>
                   
                    <div style={{backgroundColor:'yellow',height:'50px',width:'40px',display:'flex',alignContent:'center',justifyContent:'center',alignSelf:'center'}}><p>D1<br></br><b>{res.available_capacity}</b></p></div>
                    <div style={{backgroundColor:'blue',color:'white',height:'70px',width:'50px',display:'flex',alignContent:'center',justifyContent:'center',alignItems:'center'}}><p><b>{res.available_capacity}</b></p></div>
                    
                    <div style={{backgroundColor:'yellow',height:'50px',width:'40px',display:'flex',alignContent:'center',justifyContent:'center',alignSelf:'center'}}><p>D2<br></br><b>{res.available_capacity}</b></p></div><br></br>
                    </div>
                    </td>
                <td>
                {res.slots!=null?res.slots.map(s=>{
                    return <p>{s}</p>
                }):null}
                </td>
                </tr>
                    : (
                        <div style={{border:'2px solid blue',borderRadius:'20px',padding:'10px',marginTop:'10px',display:'flex',justifyContent:'center',alignContent:'center',flexDirection:'column',}}>
                            <div >{res.address}</div>
                            <div style={{display:'flex',justifyContent:'space-around'}}>
                                <div style={{color:'grey'}}> {res.name+" "+res.state_name}</div>
                                <div style={{color:'red'}}><b>{res.vaccine}<br></br><span style={{backgroundColor:'royalblue',color:'wheat',borderRadius:'5px'}}>{res.fee_type}</span></b></div>
                               </div>

                            <div style={{display:'flex',justifyContent:'space-around'}}>
                                <div style={{backgroundColor:'green',color:'white',borderRadius:'3px'}}>{res.min_age_limit} & above</div>
                                <div>Dose 1 <b style={{color:'green'}}>{res.available_capacity_dose1}</b></div>
                                <div>Dose 2 <b style={{color:'green'}}>{res.available_capacity_dose2}</b></div>
                            </div>
                            

                        </div>
                    )
                }
              
               
               </MediaQuery>
               
               :null) 
                             
            })
            ):(arr)
        return (
            
            <div className="m-5">
                <h1 className="headingVaccine">Search Your Nearest Vaccination Center</h1>
                <h6 className="infoheading">Get a preview list of the nearest centers and check availability of vaccination slots</h6>
                <a  href="https://www.cowin.gov.in/"><h6 className="cowinlink">Login To Book Your Slot</h6></a>
                <form>
  <div class="form-row ">
    <div class="col">
      <input type="number" class="form-control" name="pincode" onChange={this.handleChange} placeholder="Enter your City Pincode"/>
    </div>
    <div class="col">
      <input  type="date"  class="form-control" name="date" onChange={this.handleChange} placeholder=""/>
    </div>
  </div>
</form>
                
                <button id="bvaccine" onClick={this.submihandler}>Find</button>
                <ul>
               <li>Slots are updated by state vaccination centers and private hospitals everyday at 8AM, 12PM, 4PM, & 8PM.</li>
               <li>Walk-in availableat all vaccination centers for age 18 years and above (For timings for walk-in vaccinations, please contact the vaccine center.)</li>
               <li>D1 - Vaccine Dose #1&nbsp;&nbsp;&nbsp;D2 - Vaccine Dose #2</li>
                </ul>
                <table className="conatiner-fluid"style={{width:'100%',textAlign:'center'}}>
                    <thead >
                        <tr>
                            <td></td>
                        </tr>
                        </thead>
                        <tbody >
                {brr}
                </tbody>
                </table>
            </div>
            
        )
    }
}

export default (VaccineCenter);

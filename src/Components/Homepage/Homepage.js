import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import CssBaseline from '@material-ui/core/CssBaseline';

import axios from 'axios'
import Delhihospitalinfo from './delhihospitalinfo/delhihospitalinfo'
import virus from '../../images/virus.png'

import Header from '../header/header'
import FeedBack from '../FeedBack/FeedBack'
import CaseShowIndia from '../CaseShow/CaseShowIndia'
import CaseShowWorld from '../../Components/CaseShow/CaseShowWorld'
import styles  from './Homepage.module.css';

import VideoSection from '../VideoSection/VideoSection'
import Footer from '../Footer/Footer'
import Vaccine from '../Vaccine/VaccineCenter'

export class Homepage extends Component {
    state={
        Confirmed:'loading',
        deaths:'loading',
        date:'loading',
        confirmedIn:'loading',
        deathsIn:'loading',
        dateIn:'laoding'
    }
    componentDidMount=()=>{
        axios.get('https://cors-anywhere.herokuapp.com/https://2019ncov.asia/api/cdr', {headers: {'Access-Control-Allow-Origin': '*'},
          }).then(res=>{
           
                const d = new Date( res.data.last_updated );
let date = d.getHours() + ":" + d.getMinutes() + ", " + d.toDateString();

            this.setState({
                Confirmed:res.data.results[0].confirmed,
                deaths:res.data.results[1].deaths,
                date:date
            })
        }).catch()
        axios.get('https://cors-anywhere.herokuapp.com/https://2019ncov.asia/api/country_region', {headers: {'Access-Control-Allow-Origin': '*'},
    }).then(res=>{
     
         console.log(res.data.results[93].confirmed);
         const d = new Date( res.data.results[93].last_updated);
         let date = d.getHours() + ":" + d.getMinutes() + ", " + d.toDateString();
         
         this.setState({
            confirmedIn:res.data.results[93].confirmed,
            deathsIn:res.data.results[93].deaths,
            dateIn:date
        })

  }).catch()
    }
    render() {
        return (
            <div className={styles.homepage}>
                <Navbar/>
                <Header/>
               
                <h1 style={{backgroundColor:"yellow"}}><marquee>Corona Facts!!</marquee></h1>
                <CssBaseline />
      
   
        <div   className={styles.div1} >
        <div className={styles.cards} >
        <CaseShowWorld image={virus} confirmed={this.state.Confirmed} deaths={this.state.deaths} date={this.state.date}/>




<CaseShowIndia image={virus} confirmed={this.state.confirmedIn} deaths={this.state.deathsIn} date={this.state.dateIn}/>
</div>
<hr style={{height:"6px",width:"50%",margin:"auto",marginTop:"40px",backgroundColor:"darkblue",borderRadius:"9px"}}/>

<Delhihospitalinfo/>
<hr style={{height:"6px",width:"50%",margin:"auto",marginTop:"40px",backgroundColor:"darkblue",borderRadius:"9px"}}/>
<hr style={{height:"6px",width:"55%",margin:"auto",marginTop:"50px",backgroundColor:"darkblue",borderRadius:"9px"}}/>
<VideoSection/>
        </div>
        <hr style={{height:"6px",width:"50%",margin:"auto",marginTop:"40px",backgroundColor:"darkblue",borderRadius:"9px"}}/>
<hr style={{height:"6px",width:"55%",margin:"auto",marginTop:"50px",backgroundColor:"darkblue",borderRadius:"9px"}}/>
<Vaccine/>

        <div style={{height:"5px"}}></div>
        <FeedBack/>
        <Footer/>
            </div>
        )
    }
}

export default Homepage

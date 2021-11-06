import React from 'react'
import virus from '../../images/virus.png'
import Card from '../CasesCard/CasesCard'
import hand from '../../images/handsanitizer.png'
import './caseShowindia.css'

function CaseShow(props) {
    return (
        <div  >
           
<Card backgroundcolor="red" date={props.date} header="Numbers At Glance In India" confirmedcases="Confirmed Cases" confirmeddeaths="Confirmed Deaths"  cases={props.confirmed} deaths={props.deaths} link="https://www.worldometers.info/coronavirus/country/india/"/>




        </div>
    )
}

export default CaseShow

import React from 'react'
import virus from '../../images/virus.png'
import Card from '../CasesCard/CasesCard'
import hand from '../../images/handsanitizer.png'
function CaseShowWorld(props) {
    return (
        <div >
            
<Card backgroundcolor='purple' header="Numbers At Glance In World" date={props.date} confirmedcases="Confirmed Cases" confirmeddeaths="Confirmed Deaths"  cases={props.confirmed} deaths={props.deaths} link="https://www.worldometers.info/coronavirus/"/>


</div>
      
    )
}

export default CaseShowWorld

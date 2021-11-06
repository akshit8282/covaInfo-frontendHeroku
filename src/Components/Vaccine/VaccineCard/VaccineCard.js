import React from 'react'

export default function VaccineCard(props) {
    return (
        <div style={{display:'flex',justifyContent:'space-evenly'}}>
            <div>
            <h5>{props.type}</h5>
            <p>{props.add}</p>
            <p>{props.name}</p>
            </div>
            <div style={{paddingLeft:'90px'}}>
                <div style={{backgroundColor:'GrayText'}}>{props.capacity}</div>
            </div>

        </div>
    )
}

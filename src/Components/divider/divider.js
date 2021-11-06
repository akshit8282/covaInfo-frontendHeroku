import React from 'react'

function divider(props) {
    return (
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
                {props.children}
            </div>
            <div>
                {props.children}
            </div>
            
        </div>
    )
}

export default divider

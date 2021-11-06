import React from 'react'
import header from '../../images/header.jpg'
import './header.css'
function Header(props) {
    return (
        <div className="container-fluid header">
    <img id="img1" src={header}/>
            </div>
    )
}

export default Header

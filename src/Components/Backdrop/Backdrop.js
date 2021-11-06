import React from 'react'
import style from './Backdrop.module.css'
function backdrop(props) {
   return props.show?<div className={style.Backdrop} onClick={props.clicked}></div>:null;
}

export default backdrop

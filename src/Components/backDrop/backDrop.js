import React, {useState} from 'react';
import './backDrop.css';

const BackDrop =(props)=>(
    props.show?
        <div className='BackDrop' onClick={props.BackdClose}></div>:null
    )
export default BackDrop;
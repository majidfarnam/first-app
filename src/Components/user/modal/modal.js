import React from 'react';
import './modal.css';
import LoginForm from '../signIn';
import BackDrop from '../../backDrop/backDrop';

const Modal =(props)=>{
    return(
        <React.Fragment>
            <BackDrop show={props.show} BackdClose={props.BackdClose}/>
            <div className='Modalclass' style={{transform:props.show?'translateX(0)':'translateX(100vw)',opacity:props.show?'1':'0'}}>
                <LoginForm />
            </div>
        </React.Fragment>
    )
}

export default React.memo(Modal)
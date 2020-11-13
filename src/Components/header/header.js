import React,{useState, useContext} from 'react';
import './header.css';
import Logo from './logo/logo';
import NavbarItems from './navbar/navbarItems';
import Button from '../button/button';
import BackDrop from '../backDrop/backDrop';
import LoginForm from '../user/signIn';
import Modal from '../user/modal/modal';
import {AuthContext} from '../../context/auth/AuthContext';

const Header =(props)=>{

    const[backLogin,setBackLogin] = useState('');
    const authContext = useContext(AuthContext);

    const BackdHandler =()=>{
        setBackLogin(true)
    }
    const BackdClose =()=>{
        setBackLogin(false)
        console.log(backLogin);
    }
    const logout =()=>{
        authContext.logout();
    }
    return(
        <React.Fragment>
            <div className="Header">
                <Logo />
                <NavbarItems />
                {authContext.authenticated?<Button btnType="primary" show={backLogin} clicked={logout}>خروج</Button>:<Button  btnType="primary" show={backLogin} clicked={BackdHandler}>ورود و عضویت</Button>}
            </div>
            <Modal show={backLogin} BackdClose={BackdClose}/>
        </React.Fragment>
        
    )
}

export default Header;

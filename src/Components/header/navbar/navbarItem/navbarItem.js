import React from 'react';
import {ReactDOM,Link} from 'react-dom';
import {NavLink} from 'react-router-dom';
import './navbarItem.css';

const NavbarItem =(props)=>{
    return(
        <li className="NavbarItem">
        <NavLink to={props.url} exact>{props.children}</NavLink>
        </li>
    )            
}
export default NavbarItem;
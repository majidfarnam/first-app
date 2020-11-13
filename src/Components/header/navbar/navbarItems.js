import React from 'react';
import NavebarItem from './navbarItem/navbarItem';
import './navbarItems.css';

const NavbarItems = ()=>{
    return(
        <ul className="NavbarItems">
            <NavebarItem url="/">خانه</NavebarItem>
            {/* <a href='http://enative.ir' target='_blank'>اینیتیو</a> */}
            <NavebarItem url='/Calendar'>تقویم</NavebarItem>
        </ul>
    )
}

export default NavbarItems;


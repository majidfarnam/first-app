import React from 'react';
import "./button.css";

const Button =(props)=>{
    let classes =["Button"]
    switch (props.btnType){
        case "primary":
            classes.push("Button");
            break;
        case "danger":
            classes.push("Danger");
            break;
        case "success":
            classes.push("Success");
            break;
        default:
            break;
    }
    return (
    <button className={classes.join(' ')} onClick={props.clicked}>{props.children}</button>
    )
}

export default Button;
import React from 'react';
import "../Button/Button.css";

let Button : any = (props: any) => {
    let color: any = props.color;
    let className : string = "";
    

    if(color === "black") {
        className = "btn-white";
    }else if(color === "white") {
        className = "btn-black"
    }
    
    
    return (
        <button className={`btn ${className} ${props.section}`}>{props.title}</button>
    );
}

export default Button;


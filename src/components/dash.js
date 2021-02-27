import React from "react";

export default function Dash(props){
    return (
        <h2 className="letter"> 	
        {props.char? props.char:"_"}
        </h2> 
    )
}
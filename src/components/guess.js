import React from "react";

export default function Guess(props){
    return (
        <h2 className="guess"> 	
        {props.char? props.char:"_"}
        </h2> 
    )
}
import React from "react";

export default function Heart(props){
   
    return (
        <h2 className="heart"> 	
        {props.count > 0 ? '♥'.repeat(props.count) : ''  }
        </h2> 
    )
}
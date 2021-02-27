import React, {useState} from 'react';

export default function Guesser(props){
    
    const [theGuess , setTheGuess] = useState('')
    function handleSubmit(e){
        e.preventDefault();
        console.log(theGuess)
        if(!(props.getState.includes(theGuess.toUpperCase()) ||  props.getState.includes(theGuess.toLowerCase()))){
            
       
        props.setState([...props.getState,theGuess.toUpperCase(),theGuess.toLowerCase()])
        if(!(props.chosen.includes(theGuess.toUpperCase()) ||  props.chosen.includes(theGuess.toLowerCase()))){
            props.setCount(props.count - 1)
        }
    }
       
        setTheGuess('')
    }
    return(
        <form onSubmit = {handleSubmit} id = "guessForm" >
            <label id = "guessLabel">Guess a letter: </label>
            <input onChange = {(e) => setTheGuess(e.target.value)} value = {theGuess} id = "letterInput" type="text" minLength="1" maxLength = "1"></input>
        </form>
    )
}
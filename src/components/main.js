import React, { useState }  from 'react';
import Heart from "./hearts";
import Dash from "./dash";
import Guess from "./guess";
import Guesser from "./guesser";
export default function Main(props){
    let lives = 5;
    const [count,setCount] = useState(lives);
    let word = props.choice
    const [chosen,setChosen] = useState(word.split(''));
    let guessed = ""
    const [getGuessed,setGuessed] = useState(guessed.split(''));
    let isDone = false;
    let win = false;
    function checkWin(){
        let filledBlanks = 0;
        for(let i = 0; i < chosen.length; i++  ){
            if(getGuessed.includes(chosen[i])){
                filledBlanks ++;
            }
            if(filledBlanks >= chosen.length){
                isDone = true;
                win = true; 
            }else if(count <= 0){
                isDone = true;
            }
            
        }  
    }
    checkWin();
    return(
    isDone? <div>
        <h1 id = "end">Game Over</h1>
        <p id = "result">
            {win? "You Won!":"You Lost!"}
            <br/>
            The word was {word}
        </p> 
        </div>:
    (
        <div className = "maingrid">
            <h1 id = "title">Welcome to Hangman</h1>
               <Heart count={count} />
               <br/>
               <div id = "letterDiv">
             {
                chosen.map((letter)=>{
                    return(<Dash char={
                       getGuessed.includes(letter) ? letter:"_"
                    } />)
                })
            }
            <br/>

            </div>
            <div id = "GuessesDiv">
            {
                getGuessed.map((letter)=>{
                    return(
                        <Guess char={letter} />
                    )
                })
            }
            </div>
            <Guesser 
            chosen = {chosen} 
            setCount = {setCount} 
            getState = {getGuessed} 
            setState = {setGuessed}
            count = {count}
            />
        </div>
    ));
}

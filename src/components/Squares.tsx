import { useState } from "react";
import styled from "styled-components";
import { PropsStyled, SquaresProps } from "../types";

const SquareSimon = styled.div`
position: relative;
margin-top: 100px;
left: calc(50% - 500px);
display: grid; 
grid-template-columns: 200px 200px;
grid-template-rows: 200px 200px;
gap: 3px;
@keyframes blink-animation {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}
`

const CellBlue = styled.div<PropsStyled>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.isHighlighted? '#5353E6' : '#1429e6'}; 
    border-radius: 100% 0 0 0;
    animation: ${props => {
        if(props.colors.blue && props.delay === 1000){return "blink-animation 1s infinite"}
        else if(props.colors.blue && props.delay === 700){return "blink-animation 0.7s infinite"}
        else if(props.colors.blue && props.delay === 400){return "blink-animation 0.4s infinite"}
        }  };
    &&:hover { border: solid 1px #000000 };
    cursor: pointer;
`

const CellYellow = styled.div<PropsStyled>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.isHighlighted? '#e8d23f': '#ceb722'};
    border-radius: 0 100% 0 0;
    animation: ${props => {
        if(props.colors.yellow && props.delay === 1000){return "blink-animation 1s infinite"}
        else if(props.colors.yellow && props.delay === 700){return "blink-animation 0.7s infinite"}
        else if(props.colors.yellow && props.delay === 400){return "blink-animation 0.4s infinite"}
        }  };
    &&:hover { border: solid 1px #000000 };
    cursor: pointer;
`

const CellRed = styled.div<PropsStyled>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.isHighlighted? '#d23e28d5' :' #c40404'};
    border-radius: 0 0 0 100%;
    animation: ${props => {
        if(props.colors.red && props.delay === 1000){return "blink-animation 1s infinite"}
        else if(props.colors.red && props.delay === 700){return "blink-animation 0.7s infinite"}
        else if(props.colors.red && props.delay === 400){return "blink-animation 0.4s infinite"}
        }  };
    &&:hover { border: solid 1px #000000 };
    cursor: pointer;
`

const CellGreen = styled.div<PropsStyled>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.isHighlighted? '#3cca51' : '#1aad42'};
    border-radius: 0 0 100% 0;
    animation: ${props => {
        if(props.colors.green && props.delay === 1000){return "blink-animation 1s infinite"}
        else if(props.colors.green && props.delay === 700){return "blink-animation 0.7s infinite"}
        else if(props.colors.green && props.delay === 400){return "blink-animation 0.4s infinite"}
        }  };
    &&:hover { border: solid 1px #000000 };
    cursor: pointer;
`

const Square: React.FC<SquaresProps> = ({
    colors, arrayOfColors, active,
    setLevel, setTick, setArrayOfColors, 
    setActive, SimonSay, delay})=>{
    const [userColors, setUserColors] = useState<string[]>([]);
    const [highlightedColor, setHighlightedColor] = useState<string | null>(null);

    function endGame(){
        setLevel(1);
        setArrayOfColors([]);
        setUserColors([]);
        setActive(prev => !prev)
    }
    
    function win(){
        setLevel(prevLevel => prevLevel + 1);
        setUserColors([]);
        setTick(0);
    }

    const isCorrect = (color: string) => {
        if(SimonSay || !active){return}
        
        let counter = 0
        let newUserColors = [...userColors, color]
        
       for (let i = 0; i < newUserColors.length; i++) {
            if(newUserColors[i] === arrayOfColors[i]){counter++}
            else {return endGame()}
        }
        if(counter === arrayOfColors.length){return win()}
        setUserColors(newUserColors)
    
    };                                                              // проверка  на совпадение с массивом цветов Саймона
    
    return <>
        <SquareSimon>
            <CellBlue 
            colors = {colors} 
            delay = {delay} 
            isHighlighted={highlightedColor === 'blue'}
            onClick={ () => {
                isCorrect('blue');
                setHighlightedColor('blue');
                setTimeout(() => setHighlightedColor(null), 150);
            }} />
            
            <CellYellow 
            colors = {colors} 
            delay = {delay} 
            isHighlighted={highlightedColor === 'yellow'}
            onClick={ () => {
                isCorrect('yellow');
                setHighlightedColor('yellow');
                setTimeout(() => setHighlightedColor(null), 150);
            }} />
            <CellRed 
            colors = {colors} 
            delay = {delay}  
            isHighlighted={highlightedColor === 'red'}
            onClick={ () => {
                isCorrect('red');
                setHighlightedColor('red');
                setTimeout(() => setHighlightedColor(null), 150)
                }} />
            <CellGreen 
            colors = {colors} 
            delay = {delay} 
            isHighlighted={highlightedColor === 'green'}
            onClick={ () => {
                isCorrect('green');
                setHighlightedColor('green');
                setTimeout(() => setHighlightedColor(null), 150);
                }} />
        </SquareSimon>
    </>
} 
export default Square
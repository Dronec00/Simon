import { useEffect, useState, useMemo } from 'react';
import  Squares  from './components/Squares'
import SelectDifficult from './components/SelectDifficult';
import GameRecord from './components/GameRecord';
import { ColorsState } from './types';

function Simon() {
  const [active, setActive] = useState<boolean>(false)
  const initColors = useMemo(
    () => {
    return {
    blue: false,
    yellow: false,
    red: false,
    green: false
    };
  }, []);
  const [colors, setColors] = useState(initColors);
  const [level, setLevel] = useState<number>(1);
  const [tick, setTick] = useState<number>(0);
  const [arrayOfColors, setArrayOfColors] = useState<string[]>([]);
  const [SimonSay, setSimonSay] = useState<boolean>(false);
  const [delay, setDelay] = useState<number>(1000);

  function StartStopGame(): void {
    setActive(prev => !prev);
    if(active) setSimonSay(true);
    setColors(initColors);
    setTick(0);
    setArrayOfColors([]);
    setLevel(1);
  };

  useEffect(()=> {
    if(!active){return}
    const id = setTimeout(() => {
      const keys = Object.keys(colors) as Array<keyof ColorsState>    // массив с цветами
      let rand = keys[Math.floor(Math.random()*4)];                   // выбор случайного цвета
      if(tick < level){ 
        
        if(tick === 0){
          setSimonSay(true);
          let prevArrayOfColors = [...arrayOfColors, rand];
          setColors({...initColors, [prevArrayOfColors[tick]]: true});
          setArrayOfColors(prevArrayOfColors);
        } 
        else if (tick > 0) {setColors({...initColors, [arrayOfColors[tick]]: true})};
        
        setTick(prevTick => prevTick + 1);
        
      }
      else if(tick === level){
        setColors(initColors);
        setSimonSay(false);
      }
      
    }, delay);
    return () => {
      clearTimeout(id);
    }
  }, [tick, active, level, delay]);
  
  return (
      <>
      <center>
      <button 
      onClick={StartStopGame} 
      style={{ width: 100, height: 50 }} >
         {active? 'Стоп' : 'Начать игру' } 
      </button>
      <h2>
        Текущий уровень: {level}
      </h2>
      <Squares 
      colors = {colors}
      arrayOfColors = {arrayOfColors}
      setLevel = {setLevel}
      setTick = {setTick}
      setArrayOfColors = {setArrayOfColors}
      setActive = {setActive}
      SimonSay = {SimonSay}
      active = {active}
      delay = {delay}
      >
      </Squares>
      <SelectDifficult 
      setDelay = {setDelay}
      delay = {delay} 
      setLevel = {setLevel} 
      setActive = {setActive} 
      setColors = {setColors}
      initColors = {initColors}  />
      <GameRecord level = {level} delay = {delay} />
      </center>
      </>
  );
}
export default Simon;
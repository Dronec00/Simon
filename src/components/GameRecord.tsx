import { useEffect, useState } from "react";
import styled from "styled-components"

interface PropsGameRecord {
    level: number
    delay: number
}

const RecordContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 190px;
    width: 300px;
    height: 200px;
    border-radius: 12px;
    background-color: #dceda7;
    user-select: none;
    h3{display: flex};
`
export default function GameRecord({level, delay}: PropsGameRecord) {
    const [easyLevel, setEasyLevel] = useState<number>(() => Number(localStorage.getItem('easyLevel') || 1));
    const [normalLevel, setNormalLevel] = useState<number>(() => Number(localStorage.getItem('normalLevel') || 1));
    const [hardLevel, setHardLevel] = useState<number>(() => Number(localStorage.getItem('hardLevel') || 1));

    useEffect(()=>{
        if(delay === 1000 && level > easyLevel){
            setEasyLevel(level);
            localStorage.setItem('easyLevel', level.toString());
        }
        else if(delay === 700 && level > normalLevel){
            setNormalLevel(level);
            localStorage.setItem('normalLevel', level.toString());
        }
        else if(delay === 400 && level > hardLevel){
            setHardLevel(level);
            localStorage.setItem('hardLevel', level.toString())
        }
    }, [level, delay]);

    return <RecordContainer>
        <h2>Ваш рекорд игры</h2>
        <h3>На легком уровне: {easyLevel} </h3>
        <h3>На нормальном уровне: {normalLevel} </h3>
        <h3>На сложном уровне: {hardLevel} </h3>

    </RecordContainer>
}
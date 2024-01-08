import styled from "styled-components"
import { SelectDifficultProps } from "../types"

const RadioBlock = styled.div`
    position: absolute;
    left: 50%;
    top: 400px;
    width: 300px;
    height: 200px;
    border-radius: 12px;
    background-color: #dceda7;
    user-select: none;
`

const Group = styled.div`
    display: flex;         
    align-items: flex-start; 
    margin-top: 20px;
`

const SelectDifficult: React.FC<SelectDifficultProps> = ({setDelay, delay, setLevel, setActive, setColors, initColors}) => {
    function reset(): void{
        setLevel(1);
        setActive(false);
        setColors(initColors);
    }
    function SelectAnotherDifficult(event: React.ChangeEvent<HTMLInputElement>): void{
        const value = event.target.value;
        switch (value) {
            case 'easy':
                setDelay(1000);
                reset();
                break;
            case 'normal':
                setDelay(700);
                reset();
                break
            case 'hard':
                setDelay(400);
                reset();
                break
            default:
                break;
        }
    }
    return <RadioBlock>
        <h2>Уровень сложности: </h2>
        <Group>
        <label>
            <input 
                type="radio"
                name="difficulty"
                value="easy"
                checked={delay === 1000}
                onChange={SelectAnotherDifficult}
                />
                <h3 style={{display: 'inline'}}>Легко</h3>
        </label>
        </Group>
        <Group>
        <label>
            <input 
                type="radio"
                name="difficulty"
                value="normal"
                checked={delay === 700}
                onChange={SelectAnotherDifficult}
                />
                <h3 style={{display: 'inline'}}>Нормально</h3>
        </label>
        </Group>
        <Group>
        <label>
            <input 
                type="radio"
                name="difficulty"
                value="hard"
                checked={delay === 400}
                onChange={SelectAnotherDifficult}
                />
                <h3 style={{display: 'inline'}}>Трудно</h3>
        </label>
        </Group>
    </RadioBlock>
}

export default SelectDifficult
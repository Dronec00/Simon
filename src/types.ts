// Тип для состояния цветов
interface ColorsState {
    blue: boolean;
    yellow: boolean;
    red: boolean;
    green: boolean;
  }

  interface SquaresProps {
    colors: ColorsState;
    arrayOfColors: string[];
    setLevel: React.Dispatch<React.SetStateAction<number>>;
    setTick: React.Dispatch<React.SetStateAction<number>>;
    setArrayOfColors: React.Dispatch<React.SetStateAction<string[]>>;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    SimonSay: boolean;
    active: boolean;
    delay: number;
  } // типы для компонента Squares 

  interface PropsStyled {
    colors: ColorsState;
    delay: number;
    isHighlighted: boolean;
}   // типы для стилизации компонентов Squares

 interface SelectDifficultProps extends Omit<SquaresProps, 'setTick' | 'setArrayOfColors' | 
 'SimonSay' | 'arrayOfColors' | 'colors' | 'active'> {
    setDelay: React.Dispatch<React.SetStateAction<number>>;
    setColors: React.Dispatch<React.SetStateAction<ColorsState>>;
    initColors: ColorsState;
 } // типы для компонента SelectDifficult

export{ColorsState, SquaresProps, PropsStyled, SelectDifficultProps}
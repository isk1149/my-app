import { ColoredMessage } from "./components/ColoredMessage";
import { CssModules } from "./components/CssModules";
import {StyledJsx} from "./components/StyledJsx";
import {StyledComponents} from "./components/StyledComponents";
import {Emotion} from "./components/Emotion";
import { TailwindCss } from "./components/TailwindCss";
import {useState, memo, useCallback} from "react";
import { useEffect } from "react";
import {Child1} from "./components/Child1";
import {Child4} from "./components/Child4";
import {Card} from "./components/Card"

export const App = memo(() => {
    console.log("App 렌더링");
    
    const [num, setNum] = useState(0);

    const onClickButton = () => {
        setNum(num + 1);
    };

    const onClickReset = useCallback(() => {
        setNum(0);
    }, []);

    const [isAdmin, setIsAdmin] = useState(false);

    const onClickSwitch = () => {
        setIsAdmin(!isAdmin)
    };

    return (
        <>
        <button onClick={onClickButton}>버튼</button>
        <p>{num}</p>
        <Child1 onClickReset={onClickReset}/>
        <Child4/>
        {isAdmin ? <span>관리자입니다</span> : <span>관리자가 아닙니다</span>}
        <button onClick={onClickSwitch}>전환</button>
        <Card isAdmin={isAdmin}/>
        </>
    );

    /*
    const [num, setNum] = useState(0);

    useEffect(()=>{
        alert();
    }, [num]);

    const onClickButton = () => {
        //alert();
        console.log("rendering");
        setNum((num)=>num+1);
    };

    const contentPinkStyle = {
        color: "pink",
        fontSize: "20px",
    };

    return (
        <>
        <h1 style={{color:"red"}}>안녕하세요!</h1>
        <ColoredMessage color="blue">잘지내시죠??!</ColoredMessage>
        <ColoredMessage color="pink">잘지냅니다!!?</ColoredMessage>
        <button onClick={onClickButton}>버튼</button>
        <p>{num}</p>
        <hr/>
        <CssModules/>
        <StyledJsx/>
        <StyledComponents/>
        <Emotion/>
        <TailwindCss/>
        </>
    );
    */
});
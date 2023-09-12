import { ColoredMessage } from "./components/ColoredMessage";
import {useState} from "react";
import { useEffect } from "react";

export const App = () => {
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
        </>
    );
};
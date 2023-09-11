import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {

    const onClickButton = () => {
        alert();
    };

    const contentPinkStyle = {
        color: "pink",
        fontSize: "20px",
    };

    return (
        <>
        <h1 style={{color:"red"}}>안녕하세요!</h1>
        <ColoredMessage color="blue" message="잘지내시죠???" />
        <ColoredMessage color="pink" message="잘지냅니다!!!" />
        <button onClick={onClickButton}>버튼</button>
        </>
    );
};
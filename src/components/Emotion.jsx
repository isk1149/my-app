/** @jsxImportSource @emotion/react */
import {jsx, css} from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
    const containerStyle = css`
    border: solid 1px #aaa;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    `;

    const titleStyle = css({
        margin: 0,
        color: "#aaa",
    });

    const SButton = styled.button`
    backgrond-color: #ddd;
    border: none;
    padding: 8px;
    border-radius: 8px;
    &:hover {
        background-color: #aaa;
        bolor: #fff;
        cursor: pointer;
    }
    `;

    return (
        <div css={containerStyle}>
            <p css={titleStyle}>Emotion입니다.</p>
            <SButton>버튼</SButton>
        </div>
    );

};

/** 
 *  tailwindcss 사용 시 package.json의 scrips 부분에 이걸로 대체
    "start": "craco start",
    "build": "craco build",
    "test": "craco test", 
    
    일반적인 상황에서는 package.json의 scripts
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    */
import {index} from "../index";

export const TailwindCss = () => {
    return (
        <div className="border border-gray-400 rounded-2xl p-2 m-2 flex justify-around items-center">
            <p className="m-0 text-gray-400">TailwindCss입니다.</p>
            <button className="bg-gray-300 border-0 p-2 rounded-md hover:bg-gray-400 hover:text-while">버튼</button>
        </div>
    );
};
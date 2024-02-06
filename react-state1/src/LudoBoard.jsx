import { useState } from "react";

export default function LudoBoard(){
    let [moves, setMoves] = useState({blue: 0, yelllow: 0, green: 0, red: 0});
    let [arr, setArr] = useState("no moves");
    let updateBlue = () => {
        setMoves((prevMoves) => {
            return {...prevMoves, blue: prevMoves.blue+1};
        });
        setArr((prevArr) => {
            return [...prevArr, " blue moves"];
        })
    };
    let updateYellow = () => {
        setMoves((prevMoves) => {
            return {...prevMoves, yelllow: prevMoves.yelllow+1};
        });
    };
    let updateGreen = () => {
        setMoves((prevMoves) => {
            return {...prevMoves, green: prevMoves.green+1};
        });
    };
    let updateRed = () => {
        setMoves((prevMoves) => {
            return {...prevMoves, red: prevMoves.red+1};
        });
    };
    return(
        <div>
            <div className="board">
            <p>Game Begins</p>
            <p>{arr}</p>
            <p>Blue moves : {moves.blue}</p>
            <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>
            <p>Yellow moves : {moves.yelllow}</p>
            <button style={{backgroundColor: "yellow"}} onClick={updateYellow}>+1</button>
            <p>Green moves : {moves.green}</p>
            <button style={{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
            <p>Red moves : {moves.red}</p>
            <button style={{backgroundColor: "red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    );
}
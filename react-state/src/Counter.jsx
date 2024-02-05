import { useState } from "react"

export default function Counter(){
    //let [stateVariable, setStateVariable] = useState(0);
    let [count, setCount] = useState(0);
    let incCount = () => {
        setCount(count+1);
    }
    // let count = 0;
    // function isCount(){
    //     count += 1;
    //     console.log(count);
    //}
    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
        // <div>
        //     <h3>Count = {count}</h3>
        //     <button onClick={isCount}>Increase Count</button>
        // </div>
    );
}
import React, {useState} from "react"

function UpdaterFunc(){
const [count, setCount] = useState(0);

function increment(){
    setCount(c => c + 1)
    setCount(c => c + 1)
    setCount(c => c + 1)
}

function decrement(){
    setCount(c => c - 1)
    setCount(c => c - 1)
}

function reset(){
    setCount(c => c = 0)
}

    return(
        <>
        <h3>Count: {count}</h3>
        <div className="buttons">
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>-</button>
        </div>
       
        </>
    )
}

export default UpdaterFunc;
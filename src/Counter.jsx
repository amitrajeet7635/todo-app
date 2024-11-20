import React, { useState } from "react"
import "./index.css"

function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <>
            <div>
                <p className="count" >{count}</p>
                <div className="opers">
                    <button className="incre" onClick={increment}>+</button>
                    <button className="res" onClick={reset}>Reset</button>
                    <button className="decre" onClick={decrement}>-</button>
                </div>

            </div>
        </>
    )

}

export default Counter
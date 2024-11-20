import React, { useState } from "react"

function ColorPicker() {

    const [color, setColor] = useState("#ffffff");

    function changeColor(event) {
        setColor(event.target.value)
    }

    return (
        <>
            <h1>Color Picker, CHOOSE YOUR FAVORTIE COLOR</h1>
            <div className="displayColor" style={{ backgroundColor: color }}>
                <p>Selected Color: {color}</p>
            </div>
            <br />
            <div className="selectColor">  
                <label>Select your FAVORTIE Color</label>
                <input type="color" value={color} onChange={changeColor} />
            </div>

        </>
    )
}

export default ColorPicker
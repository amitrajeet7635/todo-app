import { useState } from "react";

function FoodList(){
    
    const[foods, setFoods] = useState(["Apple", "Orange", "Mango"]);

    function handleFood(){
        const newFood = document.getElementById('newFood').value;
        document.getElementById('newFood').value = "";

        setFoods(f => [...f, newFood]);

    }

    function removeFood(index){
        setFoods(foods.filter((_,i) => i != index))
    }


    return(
        <div>
            <h1>Here is the food List</h1>
            <ul>
                {
                    foods.map((food, index) => <li key={index} onClick={() => removeFood(index)}>{food}</li>)
                }
            </ul>
            <input type="text" id="newFood" placeholder="Enter the food" />
            <button onClick={handleFood}>Add Item</button>

        </div>
    )
}

export default FoodList
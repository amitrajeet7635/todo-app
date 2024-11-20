import React, { useState } from "react";

function CarUpdater(){

    const[car, setCar] = useState({year: 2024, brand:"Lamborghini", model:"truck"});

    function handleYear(event){
        setCar(c => ({...c, year:event.target.value}));

    }

    function handleBrand(event){
        setCar(c => ({...c, brand:event.target.value}));

    }

    function handleModel(event){
        setCar(c => ({...c, model:event.target.value}));

    }

    return(
        <div>
            <p>Your Favourite Car is: {car.year} {car.brand} {car.model} </p>
            <input type="number" value = {car.year} onChange={handleYear} /> <br />
            <input type="text" value = {car.brand} onChange={handleBrand} /> <br />
            <input type="text" value = {car.model} onChange={handleModel} />
        </div>
    )
}

export default CarUpdater;
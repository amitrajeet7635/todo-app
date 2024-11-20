import React, { useState } from "react"

function MyEvent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleAgeChange(event) {
        setAge(event.target.value)
    }

    function handleCommentChange(event) {
        setComment(event.target.value)
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value)
    }

    function handleShippingChange(event) {
        setShipping(event.target.value)
    }

    return (
        <div>
            <input className="border bg-red-200 p-1 m-2" value={name} onChange={handleNameChange} />
            <p className="m-2">Name: {name}</p>
            <input className="border bg-red-200 p-1 m-2" value={age} onChange={handleAgeChange} type="number" />
            <p className="m-2">Age: {age}</p>
            <textarea className="border bg-red-200 p-1 m-2" value={comment} onChange={handleCommentChange} placeholder="Add the description here"></textarea>
            <p className="m-2">Comment: {comment}</p>
            <select value={payment} onChange={handlePaymentChange} >
                <option value="Select">Select the Payment Option</option>
                <option value="Cash">Cash</option>
                <option value="UPI">UPI</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
            </select>
            <p>Payment Method: {payment}</p>

            <label> <input type="radio" value={"Pick Up"} checked={shipping === "Pick Up"} onChange={handleShippingChange} /> Pick Up</label>
            <br />
            <label> <input type="radio" value={"Delivery"} checked={shipping === "Delivery"} onChange={handleShippingChange} /> Delivery</label>

            <p>Shipping Method: {shipping}</p>

        </div>
    )
}

export default MyEvent
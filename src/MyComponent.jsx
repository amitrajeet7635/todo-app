import React, {useState} from "react"
function MyComponent(){

    const [name, setName] = useState('Guest');
    const [age, setAge] = useState(0);
    const [isEmployed, setEmployed] = useState(false);

    const updateName = () =>{
        setName("Amitrajeet")
    }

    const updateAge = ()=>{
        setAge(age + 1)
    }

    const updateStatus = ()=>{
        setEmployed(!isEmployed)
    }

    return(
        <div>
            <p className="m-1">Name: {name}</p>
            <button className="border bg-blue-300 p-1 m-1"  onClick={updateName}>Click to Update Name</button>

            <p className="m-1">Age: {age}</p>
            <button className="border bg-blue-300 p-1 m-1"  onClick={updateAge}>Increase Age</button>

            <p className="m-1">Status: {isEmployed ? "Yes" : "No"}</p>
            <button className="border bg-blue-300 p-1 m-1"  onClick={updateStatus}>Check Naukari Status</button>
        </div>
    )

}



export default MyComponent
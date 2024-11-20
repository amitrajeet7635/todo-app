function Button(){

    // Using condition
    // let count = 0;
    // const handleClick = (name) => {
    //     if(count<3){
    //         count++;
    //         console.log(`${name} clicked me ${count} time/s`);
    //     }
    //     else{
    //         console.log(`${name} stop clicking me!!`)
    //     }
    // };

    // Using a 'e' parameter
    const handleClick = (e) => e.target.textContent = "Ouch!!";

    return(
        <button class="border bg-emerald-300 p-1 m-2 rounded-md" onDoubleClick={handleClick}>Click Me  </button>
    )
}

export default Button
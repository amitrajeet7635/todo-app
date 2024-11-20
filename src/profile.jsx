function Profile(){
 
    const img = "./src/assets/amit.jpg";
    
    const handleClick = (e) => e.target.style.display = "none";

    return(<img onDoubleClick={handleClick} src = {img}></img>)

}

export default Profile
function Card(){
    return (
        <div className="card w-[350px] border border-black inline-flex justify-center flex-col items-center text-center p-6 m-10 ">
            <img src="https://picsum.photos/200" alt="" className="w-[200px] h-[200px] rounded-full" />
            <h1 className="text-3xl font-bold">This is a card</h1>
            <p>This is the content of the card Lorem ipsum dolor sit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus earum deserunt tempora enim pariatur! Nemo sit debitis incidunt distinctio! </p>
        </div>
    )
}

export default Card
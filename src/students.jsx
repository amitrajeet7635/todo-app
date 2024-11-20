import PropTypes from "prop-types"
function Student(props) {
    return (
        <>
            <div className="border m-10 p-4 w-fit">
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Adult: {props.isAdult ? "Ayee Bda Ho gya tu" : "Beta abhi tu bacha hai"}</p>
            </div>
        </>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isAdult: PropTypes.bool

}

Student.defaultProps ={
    name: "TMKC",
    age: 0,
    isAdult: false
}

export default Student
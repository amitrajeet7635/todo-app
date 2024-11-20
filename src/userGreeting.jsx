import PropTypes from "prop-types"

function UserGreeting(props) {

            return(props.isLoggedIn ? <h1>Welcome {props.username}</h1> : <h1>Please log in first</h1>)
}

UserGreeting.proptypes ={
    isLoggedIn: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired   
}

UserGreeting.defaultProps ={
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting
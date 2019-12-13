// import React from 'react';
// import { history } from "../../helper/history"

// const Logout = () => {
//     localStorage.removeItem('user');
//     history.push("/login")
//     return (
//         <div />
//     )
// }

// export default Logout;


import React, { Component } from 'react';
import { connect } from "react-redux";
import { usreActions, userActions } from "../../store/actions/userAction"
import { history } from "../../helper/history"

class Logout extends Component {
    state = {}
    componentDidMount() {
        this.props.logout();
        history.push("/login")
    }
    render() {
        return (<div></div>);
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(userActions.logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout);
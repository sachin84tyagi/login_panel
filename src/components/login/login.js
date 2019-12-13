import React, { Component } from 'react';
import { connect } from "react-redux";
import { userActions } from "../../store/actions/userAction";
import redirect from "../../helper/redirect"

class Login extends Component {
    state = {
        email: "",
        password: "",
        submitted: false
    }

    componentDidMount() {
        redirect("/dashboard")
    }

    handleChange = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ submitted: true });
        const { email, password } = this.state;
        if (email && password) {
            this.props.logedInAction(email, password);
        }
    }

    render() {
        const { email, password, submitted } = this.state;
        return (
            <div className="row">
                {this.props.data}
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h4 className="card-title text-center">Sign In</h4>
                            <form className="form-signin" onSubmit={this.handleSubmit}>
                                <div className="form-label-group">
                                    <input name="email" value={email} id="inputEmail" className="form-control" placeholder="Email address" onChange={(e) => this.handleChange(e)} />
                                    {submitted && !email &&
                                        <div className="err-msg" style={{ color: "#F00" }}>Username is required</div>
                                    }
                                </div>
                                <br />
                                <div className="form-label-group">
                                    <input name="password" type="password" value={password} id="inputPassword" className="form-control" placeholder="Password" onChange={(e) => this.handleChange(e)} />
                                    {submitted && !password &&
                                        <div className="err-msg" style={{ color: "#F00" }}>Password is required</div>
                                    }
                                </div>
                                <br></br>
                                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("State Data ::: ", state)
    return {
        data: state.LoginRed.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logedInAction: (username, password) => dispatch(userActions.loginAction(username, password)),
        logout: () => dispatch(userActions.logout)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
import React, { Component } from 'react';
import Input from "../../ui/input"
import TextArea from '../../ui/textArea';
import { connect } from "react-redux"
import { Link } from "react-router-dom";
import { userActions } from '../../store/actions/userAction';

class Useredit extends Component {
    state = {
        data: { fname: "", lname: "", message: "" },
        errors: {}
    };

    componentDidMount() {
        console.log("PARAMS :: componentDidMount ::  ", this.props.match.params.id)
        // let data = getUser(this.props.match.params.id);
        // console.log(data[0]);
        // data = data[0];
        // this.setState({ data });
        // console.log(this.state.data)
    }

    handleChange = (e) => {
        const data = { ...this.state.data };
        data[e.target.name] = e.target.value;
        this.setState({ data })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting..........")
        //saveUser(this.state.data);
        //this.props.history.push("/users");
    }

    render() {
        console.log("PARAMS :: ", this.props.match.params.id)
        return (
            <div>
                <div className="d-flex pt-3 pb-2 mb-3 border-bottom">
                    <h5 className="h5">Add New </h5>
                </div>
                <form role="form" className="form-horizontal" onSubmit={this.handleSubmit}>


                    <div className="row">

                        <div className="col-md-6">
                            <Input
                                value={this.state.fname}
                                onChangeHandle={(e) => this.handleChange(e)}
                                name="fname"
                                className="form-control form-control-sm"
                                errorMessage={this.state.errors.datetime}
                                placeHolder="First Name"
                            />
                        </div>
                        <div className="col-md-6">

                            <Input
                                value={this.state.lname}
                                onChangeHandle={(e) => this.handleChange(e)}
                                name="lname"
                                className="form-control form-control-sm"
                                errorMessage={this.state.errors.lname}
                                placeHolder="Last Name"
                            />
                        </div>
                    </div>
                    <div className="row">


                        <div className="col-md-12">
                            Message
 </div>
                        <div className="col-md-12">
                            <TextArea
                                value={this.state.message}
                                onChangeHandle={(e) => this.handleChange(e)}
                                name="message"
                                className="form-control form-control-sm"
                                errorMessage={this.state.errors.message}
                                placeHolder="Message" />

                        </div>
                    </div>

                    <Link
                        to="/users"
                        className="btn btn-primary"
                    >
                        Back
                  </Link>
                    &nbsp; &nbsp;
                     <button type="submit" className="btn btn-primary">
                        Save
             </button>
                </form>

            </div >


        );
    }
}
const mapDispatchToState = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserData: () => dispatch(userActions.getUsers)
    }
}

export default connect(mapDispatchToState, mapDispatchToProps)(Useredit);
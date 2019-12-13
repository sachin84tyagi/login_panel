import React, { Component } from 'react';
import { connect } from "react-redux";
import TextArea from '../../ui/textArea';
import { userActions } from "../../store/actions/userAction"

import { Link } from "react-router-dom";

class Useradd extends Component {
    state = {
        data: { fname: "", lname: "", message: "" },
        errors: {},
        submitted: false
    };

    handleChange = (e) => {
        const data = { ...this.state.data };
        data[e.target.name] = e.target.value;
        this.setState({ data })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting..........");
        this.setState({ submitted: true });
        console.log("DATA :: ", this.state.data);
        const { fname, lname, message } = this.state.data
        if (fname && lname && message)
            this.props.saveUser(this.state.data)
    }

    render() {
        const { data, submitted } = this.state
        return (
            <div>
                <div className="d-flex pt-3 pb-2 mb-3 border-bottom">
                    <h5 className="h5">Add New </h5>
                </div>
                <form role="form" className="form-horizontal" onSubmit={this.handleSubmit}>


                    <div className="row">

                        <div className="col-md-6">
                            <input name="fname" value={data.fname} id="inputEmail" className="form-control  form-control-sm" placeholder="First Name" onChange={(e) => this.handleChange(e)} />

                            {submitted && !data.fname &&
                                <div className="err-msg" style={{ color: "#F00" }}>1First Name is required</div>
                            }
                        </div>
                        <div className="col-md-6">
                            <input name="lname" value={data.lname} id="inputEmail" className="form-control  form-control-sm" placeholder="Last Name" onChange={(e) => this.handleChange(e)} />
                            {submitted && !data.lname &&
                                <div className="err-msg" style={{ textAlign: "left" }} style={{ color: "#F00" }}>Last Name is required</div>
                            }
                        </div>
                    </div>
                    <div className="row">


                        <div className="col-md-12">
                            Message
 </div>
                        <div className="col-md-12">
                            <TextArea
                                value={data.message}
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

const mapStateToProps = (state) => {
    console.log(state)
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveUser: (data) => dispatch(userActions.saveUser(data))
    }
}

export default connect(mapStateToProps)(Useradd);
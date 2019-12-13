import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { userActions } from "../../store/actions/userAction"
import Spinner from "../../helper/spinner"
import Input from "../../ui/input"

class Users extends Component {
    state = {
        users: [],
        searchQuery: "",
        data: { name: "" },
    }

    constructor(props) {

        super(props);
        this.props.getAllData();

    }

    handleChange = ({ currentTarget: input }) => {

        const data = { ...this.state.data };
        data[input.name] = input.value;

        this.setState({ data });
    };

    handleSubmit = async (e) => {

        e.preventDefault();
        this.setState({ submitted: true });

        if (this.state.data.name) {
            console.log("Searching")
        }
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.users !== this.props.users) {
            this.setState({ users: nextProps.users })
        }

    }

    handleDelete = (id) => {

        let { users } = this.state
        users = users.filter((user) => user.id != id);
        this.setState({ users })
        this.props.deleteUser(id);

    }

    handleSearch = query => {
        console.log(query)
        this.setState({ searchQuery: query });
    };

    render() {
        const { users, searchQuery } = this.state;
        let filtered = users;

        if (searchQuery)
            filtered = users.filter(m =>
                m.name.toLowerCase().startsWith(searchQuery.toLowerCase())
            );

        return (<div>
            <div className="d-flex pt-3 pb-2 mb-3 border-bottom">
                <h5>User Listing</h5>
            </div>
            <div className="col-xs-8 col-xs-offset-2">
                <div className="input-group">
                    <div className="form-group col-lg-3">

                        <input
                            type="text"
                            name="query"
                            className="form-control form-control-sm"
                            placeholder="Search..."
                            value={this.state.searchQuery}
                            onChange={e => this.handleSearch(e.currentTarget.value)}
                        />

                    </div>
                    <div className="input-group-btn col-9 text-right">
                        <Link
                            to="/useradd"
                            className="btn btn-primary btn-sm"
                            style={{ marginBottom: 20 }}
                        >
                            Add New
                        </Link>
                    </div>
                </div>
            </div>

            {users ? "" : (<div><br /> <br /> <br /><Spinner colorClass="text-primary" /></div>)}

            <table className="table table-hover table-bordered">
                {filtered && (<thead align="center">
                    <tr>
                        <th align="center" scope="col">
                            #
              </th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Website</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>)}
                <tbody>
                    {filtered && filtered.map((user) => (
                        <tr key={user.id}>
                            <td align="center">
                                {user.id}
                            </td>
                            <td align="center">{user.name}</td>
                            <td align="center">{user.email}</td>
                            <td align="center">{user.website}</td>
                            <td width="11%" align="center">
                                <div style={{ color: "#dc3545", fontSize: "18px" }}>
                                    <i onClick={() => this.handleDelete(user.id)}
                                        style={{
                                            borderRight: "1px solid #dc3545",
                                            paddingRight: "6px",

                                            cursor: "pointer"
                                        }}
                                        className="fa fa-trash"
                                        aria-hidden="true"
                                    />
                                    <Link
                                        to={`/useredit/${user.id}`}
                                        style={{ color: "#dc3545" }}
                                    >
                                        <i
                                            style={{
                                                borderRight: "1px solid red",
                                                paddingRight: "6px",
                                                paddingLeft: "8px",
                                                cursor: "pointer"
                                            }}
                                            className="fa fa-edit"
                                            aria-hidden="true"
                                        />
                                    </Link>
                                    {/* <i
                                        style={{
                                            borderRight: "1px solid red",
                                            paddingRight: "2px",
                                            paddingLeft: "4px",
                                            cursor: "pointer"
                                        }}
                                        className="fa fa-edit"
                                        aria-hidden="true"
                                    /> */}
                                    <i
                                        style={{
                                            paddingRight: "4px",
                                            paddingLeft: "6px",
                                            cursor: "pointer"
                                        }}
                                        className="fa fa-lightbulb-o custom"
                                        aria-hidden="true"
                                    />
                                </div>
                            </td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.UserRed.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllData: () => dispatch(userActions.getAll()),
        deleteUser: (id) => dispatch(userActions.delete(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);
import React from "react";
import { Link } from "react-router-dom";
import { authHeader } from "../auth-header"

const Header = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    return (
        <div className="header py-4">

            <div className="row">
                <div className="col-1">
                    <Link className="navbar-brand" to="/dashboard">
                        Logo
                    </Link>
                </div>

                {authHeader().Authorization && <div className="col-11 text-right">
                    Hi {user.name} | &nbsp;
            <Link className="" to="/logout">
                        Logout
            </Link>
                    &nbsp;
            <i className="fa fa-power-off" aria-hidden="true" />
                </div>}
            </div>

        </div>
    );
};

export default Header;

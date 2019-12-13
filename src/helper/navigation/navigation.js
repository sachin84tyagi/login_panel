import React from "react";
import { NavLink } from "react-router-dom";
import { authHeader } from "../auth-header"

const Navigation = () => {

    return (
        <div>
            {
                authHeader().Authorization && <nav style={{ background: "#177fff" }} className="navbar-expand-lg navbar-light bg-light">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-item nav-link" to="/dashboard">
                                Dashboard
                            </NavLink>
                            <NavLink className="nav-item nav-link" to="/users">
                                User
                            </NavLink>
                            <NavLink className="nav-item nav-link" to="/products">
                                Products
                            </NavLink>

                        </div>
                    </div>
                </nav>
            }

        </div>

    );
};

export default Navigation;

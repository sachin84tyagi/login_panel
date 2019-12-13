import React, { Component } from 'react';
import './App.css';

import { Router } from "react-router-dom"
import Header from "./helper/header/header";
import Navigation from "./helper/navigation/navigation"
import { history } from "./helper/history";
import Route from "./Router";
import { connect } from "react-redux";
import { alertActions } from "./store/actions/alertAction";


class App extends Component {
  constructor(props) {
    super(props);
    history.listen((location, action) => {
      console.log("Location", location);
      console.log("Action", action)
      // this.props.clearAlerts();
    });
  }
  render() {
    const { alert } = this.props;
    return (
      <div className="container">
        <div className="App">

          <Router history={history}>
            <Header />
            <Navigation />

            {alert.message &&
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <Route />
          </Router>

        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  console.log("mapStateToProps", state.AlertRed)
  return {
    alert: state.AlertRed
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearAlerts: () => dispatch(alertActions.clear())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

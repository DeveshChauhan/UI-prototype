import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// CSS
import "../css/MainContainer.css";

// Components
import Dashboard from "./Dashboard";

class MainContainer extends Component {
    render() {
        return (
            <div className="main-container">
                <Switch>
                    <Route path="/" component={Dashboard} />
                </Switch>
            </div>
        );
    }
}

export default MainContainer;

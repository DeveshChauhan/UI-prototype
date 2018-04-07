import React, { Component, Fragment } from "react";

// Components
import MainContainer from "./components/MainContainer";
import Header from "./components/Header";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <MainContainer />
            </Fragment>
        );
    }
}

export default App;

import React, { Component } from "react";
import { Link } from "react-router-dom";

// CSS
import "../css/Header.css";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__flex-row">
                    <Link to="/">
                        <div className="header__logo">
                            <i className="fa fa-rocket" />
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="header__datepicker">
                            March 2018 <i className="fa fa-caret-down" />
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="header__download">
                            <i className="fa fa-download" />
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="header__filter">
                            <i className="fa fa-filter" />
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Header;

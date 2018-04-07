import React, { Component } from "react";

// Components
import DashboardContainer from "./dashboard-components/DashboardContainer";

// CSS
import "../css/Dashboard.css";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tile: [
                {
                    label: "quartile",
                    color: "#093e53"
                },
                {
                    label: "quartile",
                    color: "#1b677d"
                },
                {
                    label: "quartile",
                    color: "#72a6b5"
                },
                {
                    label: "quartile",
                    color: "#bac9ce"
                }
            ],
            navbar: [
                {
                    label: "overview"
                },
                {
                    label: "top practices"
                },
                {
                    label: "outcomes"
                }
            ],
            activeNavItem: "overview"
        };
    }

    // handle click event
    handleClickEventOnNavItem = active => {
        this.setState({
            activeNavItem: active
        });
    };

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard__tile-container">
                    {this.state.tile.map((d, index) => (
                        <div key={index} className="dashboard__tile">
                            <div
                                className="dashboard__tile-box"
                                style={{
                                    backgroundColor: `${d.color}`
                                }}
                            />
                            <div className="dashboard__tile-label">
                                {d.label}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="dashboard__navbar">
                    {this.state.navbar.map((d, index) => (
                        <a
                            key={index}
                            href="javascript: void(0)"
                            onClick={() =>
                                this.handleClickEventOnNavItem(d.label)
                            }
                        >
                            <div
                                className={`dashboard__navbar-item ${
                                    this.state.activeNavItem === d.label
                                        ? "active"
                                        : ""
                                }`}
                            >
                                <div className="dashboard__navbar-label">
                                    {d.label}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                <DashboardContainer />
            </div>
        );
    }
}

export default Dashboard;

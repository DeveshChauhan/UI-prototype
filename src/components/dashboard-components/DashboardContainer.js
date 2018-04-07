import React, { Component } from "react";

// Components
import CustomAreaChart from "./CustomAreaChart";

// CSS
import "./css/DashboardContainer.css";

class DashboardContainer extends Component {
    render() {
        return (
            <div className="dashboard__container">
                <div className="dashboard__card">
                    <div className="dashboard__card-header">
                        Your Organization health looks good this month!
                        <div style={{ padding: "20px 0px" }}>
                            <span className="dashboard__data-point--big">
                                78
                            </span>
                            <span className="dashboard__data-point--small">
                                <i className="fa fa-caret-up" />10%
                            </span>
                        </div>
                    </div>
                    <div className="dashboard__card-body">
                        <div className="dashboard__responsive-container">
                            <CustomAreaChart />
                        </div>
                    </div>
                </div>
                <div className="dashboard__card">
                    <div className="dashboard__card-header">
                        Response Rate
                        <div>
                            <span className="dashboard__data-point--medium">
                                83%
                            </span>
                            <span className="dashboard__label--small">
                                &nbsp;2100/2500 respondants
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardContainer;

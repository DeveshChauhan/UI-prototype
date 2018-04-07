import React, { Component } from "react";
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    // YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

const data = [
    { name: "Jan", value: 2000 },
    { name: "Feb", value: 3050 },
    { name: "Mar", value: 1700 },
    { name: "Apr", value: 5780 },
    { name: "May", value: 3700 },
    { name: "Jun", value: 6780 }
];

class CustomAreaChart extends Component {
    render() {
        return (
            <ResponsiveContainer>
                <AreaChart
                    width={600}
                    height={400}
                    data={data}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                            <stop
                                offset="5%"
                                stopColor="#daf3ff"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#daf3ff"
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <CartesianGrid vertical={false} />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#018b94"
                        fillOpacity={1}
                        fill="url(#color)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        );
    }
}
export default CustomAreaChart;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PieChart from "../components/PieChart";
import { Chart } from "chart.js";
import useAxios from "../hooks/useAxios";
import Spinner from "../components/Spinner";

const Welcome = () => {
    const [chartData, setChartData] = useState([]);
    const { makeRequest } = useAxios();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        makeRequest("GET", "/issues/status/count").then((res) => {
            console.log(res);
            setChartData(res);
            setLoading(false);
        });
    }, []);

    return (
        <div className='welcome-page page'>
            <h1>Welcome to the Bug Tracker</h1>
            <p>
                This is a simple bug tracker that allows you to create, edit,
                and delete issues.
            </p>

            <Link to='/issues' className='btn btn-primary'>
                Get Started Now
            </Link>

            <hr />
            <div className='charts'>
                <div className='chart'>
                    {loading ? (
                        <Spinner/>
                    ) : (
                        <PieChart chartData={chartData} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Welcome;

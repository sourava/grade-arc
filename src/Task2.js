import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactJson from 'react-json-view'

const Task2 = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const url = 'https://randomuser.me/api/?results=20';

    const fetchData = async () => {
        axios.get(url).then(function (response) {
            setData(response.data.results);
        }).catch(function (error) {
            setError(error.response.data);
        });
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <ReactJson src={data} />
            <button onClick={fetchData}>Refresh</button>
        </div>
    );
}

export default Task2;

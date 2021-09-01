import React, { useReducer, useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Task2 from "./Task2";
import Task3 from "./Task3";
import Task4 from "./Task4";
import Button from "./Button";

const PageWrapper = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 50px auto;
`;

const reducer = (state, action) => {
  switch (action.type) {
    case "FULFILLED":
      return { data: action.data, error: null, loading: false };
    case "REJECTED":
      return { data: [], error: action.data, loading: false };
    case "PENDING":
    default:
      return { data: [], error: null, loading: true };
  }
};

const initialState = {
  loading: false,
  data: [],
  error: null,
};

function App() {
  const [currentTask, setCurrentTask] = useState(2);
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = "https://randomuser.me/api/?results=20";

  const fetchData = async () => {
    dispatch({ type: "PENDING" });
    axios
      .get(url)
      .then(function (response) {
        dispatch({ type: "FULFILLED", data: response.data.results });
      })
      .catch(function (error) {
        dispatch({ type: "REJECTED", data: error.response.data });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderTask = () => {
    switch (currentTask) {
      case 3:
        return <Task3 data={state} />;
      case 4:
        return <Task4 data={state} />;
      case 2:
      default:
        return <Task2 data={state} />;
    }
  };

  return (
    <PageWrapper>
      <Button onClick={() => setCurrentTask(2)}>Task 2</Button>
      <Button onClick={() => setCurrentTask(3)}>Task 3</Button>
      <Button onClick={() => setCurrentTask(4)}>Task 4</Button>

      <div>
        {
          state.loading ? <span>Loading ...</span> : renderTask()
        }
      </div>
      
      <Button onClick={fetchData}>Refresh</Button>
    </PageWrapper>
  );
}

export default App;

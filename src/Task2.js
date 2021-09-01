import React from "react";
import styled from "styled-components";
import ReactJson from "react-json-view";

const JSONWrapper = styled.div`
  width: 100%;
  max-height: 200px;
  overflow: scroll;
`;

const Task2 = ({ data }) => {
  return (
    <JSONWrapper>
      <ReactJson theme="monokai" src={data.data} />
    </JSONWrapper>
  );
};

export default Task2;

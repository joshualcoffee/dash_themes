import React from "react";
import styled from "styled-components";
import data from "./data";
import Chart from "./Chart";
import Presentation from "./Presentation";
const brandAwarenessData = data.reports["brand_awareness-41"];
const Wrapper = styled.div`
  background: #37474f;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Canvas = styled.div`
  width: 100vw;
  max-width: 1377px;
  height: 700px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
function App() {
  return (
    <Wrapper>
      <Canvas>
        <Chart data={brandAwarenessData.data.report_data.intervals} />
      </Canvas>
    </Wrapper>
  );
}

export default Presentation;

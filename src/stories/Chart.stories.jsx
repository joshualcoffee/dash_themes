import React from "react";
import Chart from "./Chart";
import data from "../data";
import styled from "styled-components";
const brandAwarenessData = data.reports["brand_awareness-41"];
export const Primary = () => (
  <Chart data={brandAwarenessData.data.report_data.intervals} />
);
export default { title: "Easy Theming" };

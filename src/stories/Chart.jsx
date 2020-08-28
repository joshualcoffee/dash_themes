import React, { useState } from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  CartesianGrid,
  theme,
} from "recharts";
import styled, { ThemeProvider } from "styled-components";
const DashboardTheme = styled.div`
  ${({ theme }) => `
      display: flex;
      .title {
        color: ${theme.primary}
      }
      .paragraph {
        color: ${theme.secondary}
      }
      a {
        color: ${theme.accent}
      }
    `}
`;

const Left = styled.div`
  flex: 0.7;
`;

const Right = styled.div`
  flex: 0.3;
`;
const Chart = ({ data }) => {
  const [theme, setTheme] = useState({
    barColor: "#0f0080",
    areaBackgroundColor: "#00ff40",
    areaStrokeColor: "#ff00dd",
    yAxisColor: "#ff0008",
    xAxisColor: "#00e1ff",
    primary: "#3700ff",
    seconday: "#51408f",
    accent: "#fcb900",
  });

  return (
    <ThemeProvider theme={theme}>
      <DashboardTheme>
        <Left>
          <h1 className="title">Header</h1>
          <p className="paragraph">text</p>
          <a href="#">Link</a>
          <ComposedChart width={800} height={300} data={data}>
            <XAxis stroke={theme.xAxisColor} dataKey="start_date" />
            <YAxis
              stroke={theme.yAxisColor}
              yAxisId="left"
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              stroke={theme.yAxisColor}
              yAxisId="right"
              orientation="right"
              axisLine={false}
              tickLine={false}
            />
            <Bar fill={theme.barColor} yAxisId="left" dataKey="totals.spend" />
            <Area
              stroke={theme.areaStrokeColor}
              fill={theme.areaBackgroundColor}
              yAxisId="right"
              dataKey="totals.leads"
              type="monotone"
            />
          </ComposedChart>
        </Left>
        <Right>
          {Object.keys(theme).map((color) => {
            return (
              <div style={{ marginBottom: "15px" }} key={color}>
                <label
                  style={{ display: "inline-block", width: "160px" }}
                  for="favcolor"
                >
                  {color}:
                </label>
                <input
                  onChange={(e) => {
                    const changes = { ...theme };
                    changes[color] = e.target.value;
                    setTheme(changes);
                  }}
                  type="color"
                  id="favcolor"
                  name="favcolor"
                  value={theme[color]}
                />
              </div>
            );
          })}
        </Right>
      </DashboardTheme>
    </ThemeProvider>
  );
};

export default Chart;

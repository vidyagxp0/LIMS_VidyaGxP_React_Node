import React from "react";
import { Chart } from "react-google-charts";

const ChartContainer = ({ chartType, data, options }) => {
  return (
    <div className="chart-container">
      <Chart
        chartType={chartType}
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default ChartContainer;

import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    //This will emmit only values inside arrray of objects of chartDataPoints from ExpenseChart.js
  const dataPointsValues = props.dataPoints.map(datapoint =>datapoint.value);
   //This will find maximum value from the dataPoints array
  const totalMaximum = Math.max(...dataPointsValues)


  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};
export default Chart;

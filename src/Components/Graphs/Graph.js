import React, { useEffect, useState, useRef } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import merge from "lodash.merge";
import { defaults } from "react-chartjs-2";

const Graph = () => {
  const { graphs } = useSelector(({ reducer }) => reducer);
  console.log(graphs);
  const [chartdata, setChart] = useState({});
  const [optiondata, setOptions] = useState();
  //   const ref = useRef();
  //   console.log(ref);

  const options = {
    scales: {
      x: [
        {
          display: false,
        },
      ],
    },
  };

  useEffect(() => {
    setChart({
      chartData: {
        labels: Object.keys(graphs).map((data, key) => {
          return data;
        }),
        datasets: [
          {
            label: "Last 60 days trend",
            borderColor: "rgb(52, 168, 83)",
            // fill: false,

            data: Object.values(graphs).map((data, key) => {
              return data;
            }),
            backgroundColor: "rgb(52, 168, 83)",
          },
        ],
      },
    });
  }, []);

  console.log(options, chartdata);
  return (
    <div>
      <Line data={chartdata.chartData} />
    </div>
  );
};

export default Graph;

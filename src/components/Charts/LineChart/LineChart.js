import Chart from "react-apexcharts";

export default function LineChart(props) {
  const {
    chartName = "Chart",
    series = [
      {
        name: "Label",
        data: [1000, 1500, 2500, 1000, 500, 200, 900],
      },
    ],
    categories = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    height = "25rem",
  } = props;

  const options = {
    chart: {
      height: "auto",
      type: "line",
      foreColor: "#687EFF",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      // colors: ["#687EFF"],
      // show: true,
      // lineCap: "butt",
      // colors: undefined,
      width: 2,
      //   dashArray: 0,
    },
    // title: {
    //   text: "Product Trends by Month",
    //   align: "left",
    // },
    grid: {
      show: false,
      row: {
        colors: ["#687EFF", "transparent"], // takes an array which will be repeated on columns
        opacity: 0,
      },
    },
    xaxis: {
      categories: categories,
      axisBorder: {
        show: true,
        color: "#687EFF",
      },
      axisTicks: {
        show: true,
        color: "#687EFF",
        height: 6,
        //   offsetX: 1,
      },
      colors: ["#687EFF"],
      labels: {
        style: {
          colors: "#687EFF",
        },
      },
    },
    yaxis: {
      axisBorder: {
        show: true,
        color: "#687EFF",
      },
      axisTicks: {
        show: true,
        color: "#687EFF",
        width: 6,
      },
      colors: ["#687EFF"],

      labels: {
        style: {
          colors: "#687EFF",
        },
      },
    },
  };
  return (
    <div style={{ height: height, backgroundColor: "#001524", padding: "3rem", borderRadius: "10px", width: "100%" }}>
      <div style={{ paddingLeft: "2rem" }}>
        <p size="lg" fw="bold">
          {chartName}
        </p>
      </div>
      <Chart className="chart" options={options} type="line" series={series} width="100%" height="100%" />
    </div>
  );
}

import Chart from "react-apexcharts";

export default function ColumnChart(props) {
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
      type: "bar",
      height: 350,
      foreColor: "#5A189A",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },

    colors: ["#687EFF"],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "25%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
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
        color: "#5A189A",
      },
      axisTicks: {
        show: true,
        color: "#687EFF",
        height: 6,
        //   offsetX: 1,
      },
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
      labels: {
        style: {
          colors: "#687EFF",
        },
      },
    },
    fill: {
      opacity: 1,
    },
    // tooltip: {
    //   y: {
    //     formatter: function (val) {
    //       return "$ " + val + " thousands"
    //     }
    //   }
    // }
  };
  return (
    <div style={{ height: height, backgroundColor: "#001524", padding: "3rem", borderRadius: "10px", width: "100%" }}>
      <div style={{ paddingLeft: "2rem" }}>
        <p size={"lg"} fw="bold">
          {chartName}
        </p>
      </div>
      <Chart className="chart" options={options} type="bar" series={series} width="100%" height="100%" />
    </div>
  );
}

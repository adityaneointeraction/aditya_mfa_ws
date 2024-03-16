import Chart from "react-apexcharts";

export default function RadialBarChart(props) {
  const { width = "100%", height = "25rem", value = 75, label = "Data" } = props;
  const series = [value];
  const color = value < 50 ? "#687EFF" : value < 75 ? "#687EFF" : "#687EFF";

  var options = {
    chart: {
      type: "radialBar",
    },
    fill: { colors: [color] },

    plotOptions: {
      radialBar: {
        hollow: {
          size: "60%",
        },
        dataLabels: {
          show: false,
        },
        track: {
          strokeWidth: "150%",
        },
      },
    },
  };

  return (
    <div
      style={{
        width: width,
        height: height,
        backgroundColor: "#001524",
        padding: "3rem",
        borderRadius: "10px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Chart
        className="chart"
        options={options}
        series={series}
        type="radialBar"
        width="100%"
        height="100%"
        style={{ marginBottom: "-2rem" }}
      />
      <p style={{ position: "absolute", top: "46.5rem", fontWeight: "bold" }}>{value}%</p>
      <p>{label}</p>
    </div>
  );
}

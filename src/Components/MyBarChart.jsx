import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// #region Sample data
const data =  [
      { "name": "5 star", "count": 9150 },
      { "name": "4 star", "count": 4100 },
      { "name": "3 star", "count": 1340 },
      { "name": "2 star", "count": 540 },
      { "name": "1 star", "count": 320 }
    ]

// #endregion
const MyBarChart = () => {
  return (
    <BarChart
      style={{ width: "100%", aspectRatio: 1.618 }}
      responsive
      data={data}
      layout="vertical"
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis width="auto" />
      <YAxis dataKey="name" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" />
      <Tooltip />
      <Legend />
     
      <Bar
        dataKey="count"
        fill="#8884d8"
        activeBar={<Rectangle fill="gold" stroke="purple" />}
      />
    </BarChart>
  );
};

export default MyBarChart;

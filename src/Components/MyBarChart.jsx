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


const MyBarChart = ({app}) => {

  return (
    <BarChart
      style={{ width: "100%", aspectRatio: 1.618 }}
      responsive
      data={app.ratings}
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
      <YAxis dataKey="name" type="category" reversed  />
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

import { React, pieChartData } from "./Collection";
import { ChartsHeader, Pie as PieChart } from "../../components/index";

const Pie = () => (
  <div className="charts-content__container">
    <ChartsHeader category="Pie" title="Project Cost Breakdown" />
    <div className="w-full">
      <PieChart
        id="chart-pie"
        data={pieChartData}
        legendVisiblity
        height="full"
      />
    </div>
  </div>
);

export default Pie;

import { ChartsHeader, LineChart, React } from "./Collection";
import "./Charts.css";
const Line = () => (
  <section className="charts-content__container">
    <ChartsHeader category="Line" title="Inflation Rate" />
    <div className="w-full">
      <LineChart />
    </div>
  </section>
);

export default Line;

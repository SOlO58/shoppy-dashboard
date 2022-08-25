import {
  React,
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  // Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "./Collection";
import { Inject } from "@syncfusion/ej2-react-grids";

const StackedChart = ({ width, height }) => {
  return (
    <ChartComponent
      width="150%"
      height="auto"
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ background: "white" }}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, idx) => (
          <SeriesDirective key={idx} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default StackedChart;

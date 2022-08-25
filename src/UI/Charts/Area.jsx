import { useStateContext } from "../../store/ContextProvider";

import {
  React,
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  // Inject,
  DateTime,
  SplineAreaSeries,
  Legend,
  ChartsHeader,
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
  // currentMode,
} from "./Collection";
import { Inject } from "@syncfusion/ej2-react-grids";

const Area = () => {
  const { currentMode } = useStateContext();

  return (
    <section className="charts-content__container ">
      <ChartsHeader category="Area" title="Inflation Rate in percentage" />
      <div className="w-full">
        <ChartComponent
          id="area-charts"
          height="420px"
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          legendSettings={{ background: "white" }}
          tooltip={{ enable: true }}
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </section>
  );
};

export default Area;

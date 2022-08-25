import {
  React,
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  // Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
  ChartsHeader,
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
  currentMode,
} from "./Collection";
import { Inject } from "@syncfusion/ej2-react-grids";

import { useStateContext } from "../../store/ContextProvider";

const Bar = () => {
  const { currentMode } = useStateContext();
  return (
    <section className="charts-content__container">
      <ChartsHeader category="Bar" title="Olympic Medal Counts - RIO" />
      <div className=" w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          legendSettings={{ background: "white" }}
        >
          <Inject
            services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}
          />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </section>
  );
};

export default Bar;

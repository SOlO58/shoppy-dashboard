import React from "react";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  // Inject,
  DateTime,
  SplineAreaSeries,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
  PyramidSeries,
  AccumulationSelection,
  SparklineComponent,
  SparklineTooltip,
  StackingColumnSeries,
} from "@syncfusion/ej2-react-charts";
// ------------------------|

import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
  pieChartData,
  PyramidData,
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";

// -------------------------|

// -------------------------|
import ChartsHeader from "./ChartsHeader";
import LineChart from "./LineChart";
import StackedChart from "./StackedChart";

// import { useStateContext } from "../../store/ContextProvider";
// const { currentMode } = useStateContext();
export {
  React,
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  StackedChart,
  // Inject,
  DateTime,
  SplineAreaSeries,
  Legend,
  ChartsHeader,
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
  // useStateContext,
  // currentMode,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
  LineChart,
  pieChartData,
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
  PyramidSeries,
  AccumulationSelection,
  PyramidData,
  SparklineComponent,
  SparklineTooltip,
  StackingColumnSeries,
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
};

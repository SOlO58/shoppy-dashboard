// import {
//   AccumulationChartComponent,
//   AccumulationSeriesCollectionDirective,
//   AccumulationSeriesDirective,
//   // Inject,
//   AccumulationLegend,
//   AccumulationDataLabel,
//   AccumulationTooltip,
//   PyramidSeries,
//   AccumulationSelection,
//   React,
//   PyramidData,
//   // currentMode,
//   ChartsHeader,
// } from "./Collection";
// import { Inject } from "@syncfusion/ej2-react-grids";

// import { useStateContext } from "../../store/ContextProvider";
// const Pyramid = () => {
//   const { currentMode } = useStateContext();
//   return (
//     <section className="charts-content__container">
//       <ChartsHeader category="Pyramid" title="Food Comparison Chart" />
//       <div className="w-full">
//         <AccumulationChartComponent
//           id="pyramid-chart"
//           legendSettings={{ background: "white" }}
//           tooltip={{ enable: true }}
//           background={currentMode === "Dark" ? "#33373E" : "#fff"}
//         >
//           <Inject
//             services={[
//               AccumulationDataLabel,
//               AccumulationTooltip,
//               PyramidSeries,
//               AccumulationLegend,
//               AccumulationSelection,
//             ]}
//           />
//           <AccumulationSeriesCollectionDirective>
//             <AccumulationSeriesDirective
//               name="Food"
//               dataSource={PyramidData}
//               xName="x"
//               yName="y"
//               type="Pyramid"
//               width="45%"
//               height="80%"
//               neckWidth="15%"
//               gapRatio={0.03}
//               explode
//               emptyPointSettings={{ mode: "Drop", fill: "red" }}
//               dataLabel={{
//                 visible: true,
//                 position: "Inside",
//                 name: "text",
//               }}
//             />
//           </AccumulationSeriesCollectionDirective>
//         </AccumulationChartComponent>
//       </div>
//     </section>
//   );
// };

// export default Pyramid;

import React from "react";

const Pyramid = () => {
  return <div>Pyramid</div>;
};

export default Pyramid;

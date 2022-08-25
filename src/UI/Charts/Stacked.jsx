import React from "react";

import { ChartsHeader, StackedChart } from "./Collection";

const Stacked = () => (
  <div className="">
    <ChartsHeader category="Stacked" title="Revenue Breakdown" />
    <div className=" w-full">
      <StackedChart />
    </div>
  </div>
);

export default Stacked;

// import React from "react";

// const Stacked = () => {
//   return <div>Stacked</div>;
// };
// export default Stacked;

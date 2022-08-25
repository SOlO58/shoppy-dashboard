import {
  Header,
  ordersGrid,
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  Edit,
  PdfExport,
  ordersData,
} from "./Collection";
import "./Collection.css";
import { Inject } from "@syncfusion/ej2-react-grids";

const Orders = () => {
  return (
    <section className="page-content__container">
      <Header category="page" title="Orders" />
      <GridComponent
        id="gridcompo"
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, idx) => (
            <ColumnDirective key={idx} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
    </section>
  );
};

export default Orders;

// import React from "react";

// const Orders = () => {
//   return <div>Orders</div>;
// };

// export default Orders;

import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Sort,
  Filter,
  Page,
  Toolbar,
  // Inject,
  Selection,
  Edit,
  customersData,
  customersGrid,
  Header,
} from "./Collection";
import { Inject } from "@syncfusion/ej2-react-grids";

const Customers = () => {
  return (
    <section className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="page" title="Customers" />
      <GridComponent
        id="te"
        width="auto"
        allowPaging
        allowSorting
        toolbar={["Delete"]}
        editSettings={{ allowDeleting: true }}
        dataSource={customersData}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </section>
  );
};

export default Customers;

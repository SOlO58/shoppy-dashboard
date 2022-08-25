import React from "react";
import {
  Header,
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  // Inject,
  Search,
  Toolbar,
  employeesGrid,
  employeesData,
} from "./Collection";
import { Inject } from "@syncfusion/ej2-react-grids";

const Employees = () => {
  return (
    <section className="page-content__container">
      <Header category="page" title="Employees" />
      <GridComponent
        width="auto"
        allowPaging
        allowSorting
        toolbar={["Search"]}
        dataSource={employeesData}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </section>
  );
};

export default Employees;

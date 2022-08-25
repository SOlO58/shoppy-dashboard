import React from "react";

import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";

import { kanbanData, kanbanGrid } from "../data/dummy";
import { Header } from "./Collection";
import "./Collection.css";

const Kanban = () => {
  return (
    <section className="page-content__container">
      <Header category="App" title="Kanban" />
      <KanbanComponent
        id="kanban"
        dataSource={kanbanData}
        cardSettings={{ contentField: "Summary", headerField: "Id" }}
        keyField="Status"
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, idx) => (
            <ColumnDirective key={idx} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </section>
  );
};

export default Kanban;

// import React from "react";

// const Kanban = () => {
//   return <div>Kanban</div>;
// };

// export default Kanban;

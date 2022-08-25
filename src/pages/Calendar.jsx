import React from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Week,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
  Month,
  WorkWeek,
  Day,
} from "@syncfusion/ej2-react-schedule";
import { scheduleData } from "../data/dummy";
import { ChartsHeader } from "./Collection";
import "./Collection.css";
// import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
// import { Data } from "@syncfusion/ej2-react-grids";
const Calendar = () => {
  return (
    <section className="page-content__container">
      <ChartsHeader category="App" title="Calendar" />
      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </section>
  );
};

export default Calendar;

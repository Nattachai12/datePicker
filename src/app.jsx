import React, { Component } from "react";
import { render } from "react-dom";
//import moment from 'moment';
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import weekOfYear from "dayjs/plugin/weekOfYear";
import isMoment from "dayjs/plugin/isMoment";
import badMutable from "dayjs/plugin/badMutable";
import localeData from "dayjs/plugin/localeData";
import advancedFormat from "dayjs/plugin/advancedFormat";
import weekYear from "dayjs/plugin/weekYear";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
// import "dayjs/locale/zh-cn";

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(advancedFormat);
dayjs.extend(customParseFormat);
dayjs.extend(weekYear);
dayjs.extend(weekOfYear);
dayjs.extend(isMoment);
dayjs.extend(localeData);
dayjs.extend(badMutable);

// dayjs.locale("zh-cn");
import DatePicker from "./DatePicker.jsx";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DatePicker />
    </div>
  );
};

render(<App />, document.querySelector("#root"));

import React from "react";
import {
  DayPickerRangeController,
  DayPickerSingleDateController,
} from "react-dates";
import moment from "moment";

export default class DatePicker extends React.Component {
  state = {
    startDate: moment(),
    endDate: moment(),
    focusedInput: null,
    focused: null,
    date: moment(),
  };

  onDateChange = (date) => {
    this.setState({ date });
  };

  onFocusChange = () => {
    // Force the focused states to always be truthy so that date is always selectable
    this.setState({ focused: true });
  };

  focusedInput = (focusedInput) => {
    console.log(`focusedInput`, focusedInput);
    this.setState({ focusedInput });
  };

  render() {
    const { focused, date } = this.state;
    console.log(this.state.startDate);
    return (
      <DayPickerSingleDateController
        onDateChange={this.onDateChange}
        onFocusChange={this.onFocusChange}
        focused={focused}
        date={date}
      />
    );
  }
}

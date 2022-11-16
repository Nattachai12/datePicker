import React from 'react';
import { DayPickerRangeController } from 'react-dates';
import moment from 'moment';

export default class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment().subtract(1, 'day'),
      focused: false,
    };
  }

  dateChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
    console.log({ startDate, endDate });
  };

  focusChange = (focusedInput) => {
    this.setState({ focusedInput });
    console.log(focusedInput);
  };

  render() {
    console.log(this.state.startDate);
    return (
      <DayPickerRangeController
        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
        startDateId='your_unique_start_date_id' // PropTypes.string.isRequired,
        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
        endDateId='your_unique_end_date_id' // PropTypes.string.isRequired,
        // onDatesChange={({ startDate, endDate }) =>this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
        onDatesChange={this.dateChange} // PropTypes.func.isRequired,
        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        // onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        onFocusChange={this.focusChange} // PropTypes.func.isRequired,
      />
    );
  }
}

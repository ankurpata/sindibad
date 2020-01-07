import React, { useState } from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import EventIcon from '@material-ui/icons/Event';
// @material-ui/icons

// core components
import styles from "assets/jss/nextjs-material-kit/components/datePickerBox.js";

const useStyles = makeStyles(styles);

import DatePicker from "react-datepicker";

const DatePickerBox = () => {
  const classes = useStyles();
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = ({ value, onClick }) => {
    let dateObj = new Date(value);
    let m = dateObj.getMonth() + 1;
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let month = months[m];
    let d = dateObj.getDate();
    const week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    var weekDay = week[dateObj.getDay()];
    return (
      <div className={classes.calendarFrom} onClick={onClick} >
        <EventIcon color="disabled" className={classes.eventIconCalendar} />
        <span className={classes.spanDate}>{month}</span>
        <span className={classes.spanDay}>{d}</span>
        <span className={classes.spanWeekDay}>{weekDay}</span>
      </div >
    );
  }
  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      customInput={<ExampleCustomInput />}
    />
  );
};

export default DatePickerBox;
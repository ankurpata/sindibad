import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import EventIcon from '@material-ui/icons/Event';
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import DatePickerBox from "components/DatePicker/DatePickerBox.js";
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import SearchIcon from '@material-ui/icons/Search';
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);
  

export default function SearchBox() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const borderC = { border: '1px solid grey' };
  const dd = () => {
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
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Search your package</h2>
      <div>
        <GridContainer className={classes.boxShadow}>
          <GridItem xs={12} sm={12} md={5} className={classes.priceBox} >
            <GridContainer className={classes.mp0} justify="flex-end" spacing={0}>
              <GridItem className={classes.mp0} xs={12} sm={12} md={10}>
                <CustomInput
                  variant="outlined"
                  id="regular"
                  inputProps={{
                    placeholder: "Price Ranging from Eg 500 AED",
                    variant: "outlined"
                  }}
                  inputRootCustomClasses={classes.inputPrice}
                  formControlProps={{
                    fullWidth: true,
                    className: classes.mp0
                  }}
                />
              </GridItem>
              <GridItem className={classes.mp0} xs={12} sm={12} md={10} >
                <CustomInput
                  variant="outlined"
                  inputProps={{
                    placeholder: "Price Ranging 1000 AED",
                    variant: "outlined"
                  }}
                  id="float"
                  inputRootCustomClasses={classes.inputPrice}
                  formControlProps={{
                    fullWidth: true,
                    className: classes.mp0
                  }}
                />
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} className={classes.dateBox}>
            <GridContainer className={classNames(classes.mp0, classes.calendarWrap)} justify="flex-start" spacing={0}>
              <GridItem className={classNames(classes.mp0, classes.w100, classes.dateFrom)} xs={12} sm={12} >
                {DatePickerBox()}
              </GridItem>
              <GridItem className={classNames(classes.mp0, classes.w100, classes.dateTo)} xs={12} sm={12}>
                {DatePickerBox()}
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem xs={12} sm={12} md={2} className={classes.searchBtnBox}>
            <Button type="button" color="info" className={classes.searchBtnPckg}>
              <SearchIcon style={{
                height: '30px',
                width: '30px'
              }} /> Search
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

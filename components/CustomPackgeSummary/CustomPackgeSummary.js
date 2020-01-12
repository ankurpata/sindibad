/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import image from "assets/img/bgLogin.png";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Button from "components/CustomButtons/Button.js";
// @material-ui/icons

import styles from "assets/jss/nextjs-material-kit/components/customPackgeSummaryStyle.js";

const useStyles = makeStyles(styles);

export default function CustomPackgeSummary(props) {
  const classes = useStyles();
  const { whiteFont } = props;

  return (
    <div className={props.className}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} className={classes.cpHeader}>
            <h1 className={`${classes.title} ${classes.cpChild} ${classes.h1}`}>Ankur's Custom Package - 12 Jan to 13 Feb '20</h1>
            <Button className={classes.cpChild}>Change Dates</Button>
            <Button className={classes.cpChild}>Change Package</Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <div
              className={classes.pageHeader}
              style={{
                backgroundImage: "url(" + 'https://www.navis.com/contentassets/23cb5da482614ac686f01cc003b6a957/headerbanner_events.jpg?width=1920' + ")",
                backgroundSize: "cover",
                height: '10em',
                margin: '1em .1em'
              }}>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={12} className={classes.eventsWrapper}>
            <div className={classes.dayScroller}>
              <List style={{ maxHeight: '100%', overflow: 'auto' }} >
                {Array.apply(0, Array(30)).map((v, k) => {
                  return <ListItem className={classes.listItem}>{k + 1}</ListItem>
                })

                }
              </List>
            </div>
            <div className={classes.eventsList}>Eveents list</div>
          </GridItem>
        </GridContainer>
      </div>
    </div >
  );
}

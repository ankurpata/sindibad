import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons 
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/packagesHomeStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  const settings = {
    className: 'myClass',
    dots: false,
    slidesPerRow: 3,
    rows: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesPerRow: 1,
          rows: 1,
        }
      }
    ]
  };
  return (
    <div className={classes.section}>
      <GridContainer justify="auto">
        <GridItem className={classes.justifyContent + " " + classes.pl0} xs={12} sm={12} md={8}>
          {/* <h2 className={classes.title}>Sindibad Packages</h2> */}
          <h5 className={classes.description + " " + classes.aboutHeader}>
            About & How it works?
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer style={{
          borderRadius: '6px',
          border: '1px solid #f1f4fa',
          background: '#f1f4fa',
          padding: '20px 0 25px 0'
        }}>
          <GridItem xs={12} sm={12} md={12} className={classes.aboutNInfoContainer}> 
            <InfoArea
              className={classes.aboutChild}
              title="Set Budget"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={MonetizationOnIcon}
              iconColor="success"
              vertical
            />
            <InfoArea
              className={classes.aboutChild}
              title="Customize Events"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={AddShoppingCartIcon}
              iconColor="danger"
              vertical
            />
            <InfoArea
              className={classes.aboutChild}
              title="Enjoy"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={CardGiftcardIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

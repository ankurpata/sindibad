import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import PackagesSection from "pages-sections/LandingPage-Sections/PackagesSection.js";
import HowItWorks from "pages-sections/LandingPage-Sections/HowItWorks.js";
import SearchBox from "pages-sections/LandingPage-Sections/SearchBox.js"; 
import Head from 'next/head';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);


export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Head>
        <title>Sindibad - The entertainment app.</title>
        <link href="/static/datepicker.css" rel="stylesheet" />
      </Head>
      <Header
        color="white"
        routes={dashboardRoutes}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax responsive image={require("assets/img/landing-page.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <h1 className={classes.title}></h1>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <SearchBox />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaisedZero)}>
        <div className={classes.container}>
          <PackagesSection />
        </div>
        <div className={classes.container}> 
          <HowItWorks />
        </div>
      </div>
      <Footer />
    </div>
  );
}

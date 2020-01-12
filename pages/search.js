import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

// @material-ui/icons
 
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import CustomPackgeSummary from "components/CustomPackgeSummary/CustomPackgeSummary.js";
 
import fetch from 'isomorphic-unfetch';

import styles from "assets/jss/nextjs-material-kit/pages/loginPage.js";
const dashboardRoutes = [];
import image from "assets/img/bgLogin.png";

const useStyles = makeStyles(styles);

export default function SearchPage(props) {
  console.log(props, ' props ', props.query.q, props.events)
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  /**
   * Custom handler for all social logins.
   * Pass props from the HOC to use here.
   * @param {*} e 
   */
  const handleSocialLoginClick = (e) => {
    e.preventDefault();
    console.log(e.target.id, 'target-name-login')
    // this.props.handleClick('twitter')
  }
  return (
    <div>
      <Header
        color="white"
        routes={dashboardRoutes}
        rightLinks={<HeaderLinks isLoggedIn={false} />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '0px 40em',
          backgroundSize: 'contain'
        }}
      >
        <div className={classNames(classes.main, classes.mainRaisedZero)}>
          <div className={classes.container}>
            <CustomPackgeSummary/>
          </div>
          <div className={classes.container}>
             
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

SearchPage.getInitialProps = async ({ query }) => {
  const res = await fetch(`http://api.tvmaze.com/search/shows?q=girls`);
  const events = await res.json();
  return { query, events }
}
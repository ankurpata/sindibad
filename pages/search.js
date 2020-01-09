import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Link from "next/link";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInputOriginal from "components/CustomInput/CustomInputOriginal.js";

import styles from "assets/jss/nextjs-material-kit/pages/loginPage.js";
const dashboardRoutes = [];
import image from "assets/img/bgLogin.png";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
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
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={6} md={4}>
              <Card className={classes[cardAnimaton]}>
            
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer />
      </div>
    </div>
  );
}

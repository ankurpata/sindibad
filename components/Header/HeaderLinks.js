/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import { CloudDownload, Person, } from "@material-ui/icons";


// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const { isLoggedIn } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        {isLoggedIn ?
          <CustomDropdown
            noLiPadding
            navDropdown
            buttonText="My Account"
            buttonProps={{
              className: classes.navLink,
              color: "transparent"
            }}
            buttonIcon={Person}
            dropdownList={[
              <Link href="/subscription">
                <a className={classes.dropdownLink}>Subscriptions</a>
              </Link>,
              <Link href="/more">
                <a className={classes.dropdownLink}>More</a>
              </Link>,
              <a
                href=""
                target="_blank"
                className={classes.dropdownLink}
              >
                Logout
            </a>
            ]}
          /> :
          <div className={classes.loginTab}>
            <Link href="/login">
              <Button
                href=""
                color="transparent"
                target="_blank"
                className={classes.navLink}
               >
                 <Person className={classes.icons} /> Login/Signup
                </Button>
            </Link>
          </div>
        }
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href=""
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Explore
        </Button>
      </ListItem>

    </List>
  );
}

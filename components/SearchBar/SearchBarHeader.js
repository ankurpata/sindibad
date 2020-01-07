import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

import Search from "@material-ui/icons/Search";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

// @material-ui/icons

// core components
import styles from "assets/jss/nextjs-material-kit/components/searchBarHeader.js";

const useStyles = makeStyles(styles);

const SearchBarHeader = props => {
    const classes = useStyles();
    return (
        <div className={classes.flexEvenly}>
            <div className = {classes.searchBarWrapper}> 
                <CustomInput
                    white
                    inputRootCustomClasses={classes.inputRootCustomClasses}
                    formControlProps={{
                        className: classes.formControl
                    }}
                    inputProps={{
                        placeholder: "Search",
                        inputProps: {
                            "aria-label": "Search",
                            className: classes.searchInput
                        }
                    }}
                />
            </div>
            <Button justIcon round color="white" className ={classes.searchBtn}>
                <Search className={classes.searchIcon} />
            </Button>
        </div>
    ); Î
};

export default SearchBarHeader;
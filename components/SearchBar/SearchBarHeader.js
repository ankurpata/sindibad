import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from '@material-ui/core/styles';

import Search from "@material-ui/icons/Search";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Router from 'next/router'

// core components
import styles from "assets/jss/nextjs-material-kit/components/searchBarHeader.js";

const useStyles = makeStyles(styles);
import useMediaQuery from '@material-ui/core/useMediaQuery';

const SearchBarHeader = props => {
    const classes = useStyles();
    const theme = useTheme();
    // const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const fullScreen = useMediaQuery('(max-width:1024)');
    const [open, setOpen] = React.useState(false);
    const [searchVal, setSearch] = React.useState("");
    const handleClickOpen = () => {
        // Router.push({ path: `/search`, query: { q: searchVal } })
        Router.push({
            pathname: '/search',
            query: { q: searchVal }
        })
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    return (
        <div className={classes.flexEvenly}>
            <div className={classes.searchBarWrapper}>
                <CustomInput
                    white
                    inputRootCustomClasses={classes.inputRootCustomClasses}
                    formControlProps={{
                        className: classes.formControl
                    }}
                    inputProps={{
                        placeholder: "Search",
                        inputProps: {
                            onChange: handleChange,
                            "aria-label": "Search",
                            className: classes.searchInput
                        }
                    }}
                />
            </div>

            {/* Dialog Not in use currenlty */}
            <Dialog fullScreen={fullScreen} open={open}>
                <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>



            <Button justIcon round color="white" className={classes.searchBtn} onClick={handleClickOpen}>
                <Search className={classes.searchIcon} />
            </Button>
        </div>
    ); Î
};

export default SearchBarHeader;
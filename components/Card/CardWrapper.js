import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "./Card.js";
import CardBody from "./CardBody.js";
import Button from "components/CustomButtons/Button.js";
import imagesStyles from "assets/jss/nextjs-material-kit/imagesStyles.js";
import { cardTitle } from "assets/jss/nextjs-material-kit.js";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const styles = {
    ...imagesStyles,
    cardTitle,
};

const useStyles = makeStyles(styles);

export default function CardWrapper(props) {
    const classes = useStyles();
    return (
        <Card style={{ width: "20rem", display: 'inline-block', margin: '0 10px', textAlign: 'justify' }}>
            <img
                style={{ height: "180px", width: "100%", display: "block" }}
                className={classes.imgCardTop}
                src={props.imgUrl}
                alt="Card-img-cap"
            />
            <CardBody>
                <h4 className={classes.cardTitle}>{props.title}</h4>
                <p>{props.description}</p>
                <Button color="primary">
                    <div>
                        <del className={classes.styleCutThroughDel}>
                            <span className={classes.amount}>{props.priceMRP}</span>
                        </del>
                        <ins className={classes.styleCutThroughIns}>
                            <span className={classes.amount}>{props.priceSRP}</span>
                        </ins>
                    </div>
                </Button>
                <div style={{ position: 'absolute', right: '0', top: '0', margin: '.5em' }}>
                    <CalendarTodayIcon style={{ fontSize: 50 }}> </CalendarTodayIcon>
                    <span style={{ position: 'absolute', left: '20px', fontWeight: 'bold', top: '19px', fontSize: '20px' }}>{props.dayDigit}</span></div>
            </CardBody>
        </Card>
    );
}
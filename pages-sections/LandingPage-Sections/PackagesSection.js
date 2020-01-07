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
import CardWrapper from "components/Card/CardWrapper.js";
import Slider from "react-slick";
import Badge from 'components/Badge/Badge.js';

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
          <h5 className={classes.description}>
            Browse our custom packages to get the most benifits.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer >
          <GridItem className={classes.packgeContainer} xs={12} sm={12} md={12}>
            <div className={classes.transbox}>
              <div className={classes.packageMetaDesc}>
                <div>
                  <Badge propsClass={classes.priceBadge} color="success">
                    <div>
                      <span>999 </span><span>AED</span>
                    </div>
                    <div>for</div>
                    <div>30 days</div>
                  </Badge>
                </div>
                <div className={classes.justifyContent + " " + classes.packageInfo}>
                <Badge propsClass={classes.badgeViewMore} 
                      color="info"> > 
                </Badge> 
                  <div style={{
                    fontSize: '20px',
                    lineHeight: '26px',
                    fontWeight: '700',
                    color: '#3c4858'
                  }}>Make a splash Theme Park Heaven</div>
                  <div className={classes.packgeDescription } >In an ultramodern megacity sprung up from the desert, these are the unique experiences you can only find here. Luxurious Dubai demands sophisticated navigation: check out these travel essentials to fully enjoy exploring the city</div> </div>
              </div>
              <div className={classes.eventBoxWrapper}>
                <Slider {...settings}>
                  <CardWrapper
                    title="Dubai Parks & Resorts"
                    priceMRP = '345 AED'
                    priceSRP = '199 AED'
                    dayDigit = '1'
                    description="Forge memories and create stories that will be told for a lifetime. Dubai Parks and Resorts is where your amazing story begins"
                    imgUrl="https://www.costacruises.com/content/dam/costa/inventory-assets/ports/DXB/dubai.jpg.image.750.563.low.jpg" />
                  <CardWrapper
                    title="Dubai Parks & Resorts"
                    priceMRP = '225 AED'
                    priceSRP = '99 AED'
                    dayDigit = '2'
                    description="Forge memories and create stories that will be told for a lifetime. Dubai Parks and Resorts is where your amazing story begins"
                    imgUrl="https://www.costacruises.com/content/dam/costa/inventory-assets/ports/DXB/dubai.jpg.image.750.563.low.jpg" />
                  <CardWrapper
                    title="Dubai Parks & Resorts"
                    priceMRP = '45 AED'
                    priceSRP = '19 AED'
                    dayDigit = '3'
                    description="Forge memories and create stories that will be told for a lifetime. Dubai Parks and Resorts is where your amazing story begins"
                    imgUrl="https://www.costacruises.com/content/dam/costa/inventory-assets/ports/DXB/dubai.jpg.image.750.563.low.jpg" />
                  <CardWrapper
                    title="Dubai Parks & Resorts"
                    priceMRP = '1345 AED'
                    priceSRP = '1299 AED'
                    dayDigit = '4'
                    description="Forge memories and create stories that will be told for a lifetime. Dubai Parks and Resorts is where your amazing story begins"
                    imgUrl="https://www.costacruises.com/content/dam/costa/inventory-assets/ports/DXB/dubai.jpg.image.750.563.low.jpg" />
                  <CardWrapper
                    title="Dubai Parks & Resorts"
                    priceMRP = '3450 AED'
                    priceSRP = '3199 AED'
                    dayDigit = '5'
                    description="Forge memories and create stories that will be told for a lifetime. Dubai Parks and Resorts is where your amazing story begins"
                    imgUrl="https://www.costacruises.com/content/dam/costa/inventory-assets/ports/DXB/dubai.jpg.image.750.563.low.jpg" />
                </Slider>
              </div>
            </div>
          </GridItem>
          <GridItem className={classes.packgeContainer} xs={12} sm={12} md={12}>
            <div className={classes.transbox}>
              <div className={classes.packageMetaDesc}>
                <div>
                  <Badge propsClass={classes.priceBadge} color="success">
                    <div>
                      <span style={{fontWeight: '700'}}>999 </span><span>AED</span>
                    </div>
                    <div>for</div>
                    <div style={{fontWeight: '700'}}>30 days</div>
                  </Badge>
                </div>
                <div className={classes.justifyContent + " " + classes.packageInfo}>
                <Badge propsClass={classes.badgeViewMore} 
                      color="info"> > 
                </Badge> 
                  <div style={{
                    fontSize: '20px',
                    lineHeight: '26px',
                    fontWeight: '700',
                    color: '#3c4858'
                  }}>Make a splash Theme Park Heaven</div>
                  <div className={classes.packgeDescription } >In an ultramodern megacity sprung up from the desert, these are the unique experiences you can only find here. Luxurious Dubai demands sophisticated navigation: check out these travel essentials to fully enjoy exploring the city</div> </div>
              </div>
              <div className={classes.eventBoxWrapper}>
                <Slider {...settings}>
                <CardWrapper
                    title="Dubai Parks & Resorts"
                    priceMRP = '345 AED'
                    priceSRP = '199 AED'
                    dayDigit = '1'
                    description="Forge memories and create stories that will be told for a lifetime. Dubai Parks and Resorts is where your amazing story begins"
                    imgUrl="https://www.costacruises.com/content/dam/costa/inventory-assets/ports/DXB/dubai.jpg.image.750.563.low.jpg" />
                  <CardWrapper
                    title="Dubai Parks & Resorts"
                    priceMRP = '225 AED'
                    priceSRP = '99 AED'
                    dayDigit = '2'
                    description="Forge memories and create stories that will be told for a lifetime. Dubai Parks and Resorts is where your amazing story begins"
                    imgUrl="https://www.costacruises.com/content/dam/costa/inventory-assets/ports/DXB/dubai.jpg.image.750.563.low.jpg" />
                  <CardWrapper
                    title="Dubai Parks & Resorts"
                    priceMRP = '45 AED'
                    priceSRP = '19 AED'
                    dayDigit = '3'
                    description="Forge memories and create stories that will be told for a lifetime. Dubai Parks and Resorts is where your amazing story begins"
                    imgUrl="https://www.costacruises.com/content/dam/costa/inventory-assets/ports/DXB/dubai.jpg.image.750.563.low.jpg" />
                  <CardWrapper
                    title="Dubai Parks & Resorts"
                    priceMRP = '1345 AED'
                    priceSRP = '1299 AED'
                    dayDigit = '4'
                    description="Forge memories and create stories that will be told for a lifetime. Dubai Parks and Resorts is where your amazing story begins"
                    imgUrl="https://www.costacruises.com/content/dam/costa/inventory-assets/ports/DXB/dubai.jpg.image.750.563.low.jpg" />
                  <CardWrapper
                    title="Dubai Parks & Resorts"
                    priceMRP = '3450 AED'
                    priceSRP = '3199 AED'
                    dayDigit = '5'
                    description="Forge memories and create stories that will be told for a lifetime. Dubai Parks and Resorts is where your amazing story begins"
                    imgUrl="https://www.costacruises.com/content/dam/costa/inventory-assets/ports/DXB/dubai.jpg.image.750.563.low.jpg" />
             
                </Slider>
              </div>
            </div>
          </GridItem> 
        </GridContainer>
      </div>
    </div>
  );
}

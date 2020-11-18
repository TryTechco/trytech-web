import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import FullWidthTabs from "components/CustomTabs/FullWidthTabs.js";

import styles from "assets/jss/trytech-material/pages/sections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection(props) {
  const classes = useStyles();
  
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>{props.data.title}</h2>
          <h5 className={classes.description}>
            {props.data.description}
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          {/* <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Free Chat"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Verified Users"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Fingerprint"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem> */}
          <FullWidthTabs data={props.data.categories} />
        </GridContainer>
      </div>
    </div>
  );
}

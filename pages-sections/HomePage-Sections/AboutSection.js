import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/trytech-material/pages/sections/aboutStyle.js";

const useStyles = makeStyles(styles);

export default function AboutSection(props) {
  const classes = useStyles();

  const about = props.data.map((text, index) => {
    return <h3 className={classes.description} key={index}>{text}</h3>
  })
  
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          {about}
        </GridItem>
      </GridContainer>
    </div>
  );
}

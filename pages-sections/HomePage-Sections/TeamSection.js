import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import MemberCard from "components/Card/MemberCard.js";

import styles from "assets/jss/trytech-material/pages/sections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function TeamSection(props) {
  const classes = useStyles();
  
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>{props.data.title}</h2>
      <div>
        <GridContainer>
          {
            props.data.members.map((m, index) => {
              return (<GridItem key={index} xs={12} sm={12} md={4}>
                <MemberCard image={m.image} name={m.name} chinesename={m.chinesename} skills={m.skills} social={m.social}/>
              </GridItem>
              )
            })
          }
        </GridContainer>
      </div>
    </div>
  );
}

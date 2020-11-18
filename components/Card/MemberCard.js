import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Grid, Link } from '@material-ui/core';

// @material-ui/icons
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LinkIcon from '@material-ui/icons/Link';

// core components
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/trytech-material/components/memberCardStyle.js";

const useStyles = makeStyles(styles);

export default function MemberCard(props) {
  const classes = useStyles();
  const { image, name, chinesename, skills, social, ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  
  return (
    <Card plain>
        <GridItem xs={12} sm={12} md={8} className={classes.itemGrid}>
            <img src={image} alt="..." className={imageClasses} />
        </GridItem>
        <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
            <h4 className={classes.cardTitle}>
                {name}
                <br />
                <small className={classes.smallTitle}>{chinesename}</small>
            </h4>
            <CardBody>
                <p className={classes.description}>{skills}</p>
            </CardBody>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
            <CardFooter className={classes.justifyCenter}>
                {
                social.map((social, index) => {
                    switch(social.name) {
                    case "email":
                        return <Avatar alt={name} key={index} className={classes.margin5}>
                                <Link href={social.url}>
                                    <MailIcon color="action" className={classes.small}/>
                                </Link>
                            </Avatar>
                        
                    case "github":
                        return <Avatar alt={name} key={index} className={classes.margin5}>
                                <Link href={social.url}>
                                    <GitHubIcon color="action" className={classes.small}/>
                                </Link>
                            </Avatar>
                    case "linkedin":
                        return <Avatar alt={name} key={index} className={classes.margin5}>
                                <Link href={social.url}>
                                    <LinkedInIcon color="action" className={classes.small}/>
                                </Link>
                            </Avatar>
                    case "profilelink":
                        return <Avatar alt={name} key={index} className={classes.margin5}>
                                <Link href={social.url}>
                                    <LinkIcon color="action" className={classes.small}/>
                                </Link>
                            </Avatar> 
                    default:
                        break;
                    }
                })
                }
            </CardFooter>
        </GridItem>
    </Card>
  );
}

MemberCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  chinesename: PropTypes.string,
  skills: PropTypes.string,
  social: PropTypes.array
};

import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Collapse, Divider, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import styles from "assets/jss/trytech-material/components/infoStyle.js";

const useStyles = makeStyles(styles);

export default function InfoArea(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { title, icon, description, services, iconColor, vertical } = props;
  const iconWrapper = classNames({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical
  });
  const iconClasses = classNames({
    [classes.icon]: true,
    [classes.iconVertical]: vertical
  });
  return (
    <div className={classes.infoArea}>
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        <img className={classes.icon} src={icon}/>
        <div onMouseEnter={() => setExpanded(true)} onMouseLeave={() => setExpanded(false)} className={classes.services}>
          {
            services.map((s, index) => {
              return <p key={index}>{s}</p>
            })
          }
          <ExpandMoreIcon fontSize="small" color="action" />
        </div>
        <Collapse className={classes.collapseWrapper} in={expanded} timeout="auto" unmountOnExit>
          <Divider />
          <p className={classes.description}>{description}</p>
        </Collapse>
        {/* <div className={classes.cardContainer}>
          <HoverCard
            front={
              <div className={classes.services}>
                {
                  services.map((s, index) => {
                    return <p key={index}>{s}</p>
                  })
                }
              </div>
            }
            back={
              <div className={classes.backText}>
                <p className={classes.description}>{description}</p>
              </div>
            }
            animationSpeed={500}
            height={200}
            margin={10}
          />
        </div> */}
      </div>
    </div>
  );
}

InfoArea.defaultProps = {
  iconColor: "gray"
};

InfoArea.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  description: PropTypes.string.isRequired,
  services: PropTypes.array.isRequired,
  iconColor: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  vertical: PropTypes.bool
};

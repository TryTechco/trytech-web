/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Language } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/trytech-material/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText={props.nowLang === "english" ? "Language" : "語言"}
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Language}
          dropdownList={[
            <a>
              <a className={classes.dropdownLink} onClick={() => {props.changeLanguage("chinese")}}>繁體中文</a>
            </a>,
            <a>
              <a className={classes.dropdownLink} onClick={() => {props.changeLanguage("english")}}>English</a>
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="github"
          title="Check our github"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href={props.data[1].url}
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-github"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

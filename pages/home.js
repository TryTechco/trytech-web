import React from "react";
import { useEffect, useState } from 'react'
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/trytech-material/pages/homePage.js";

// Sections for this page
import AboutSection from "pages-sections/HomePage-Sections/AboutSection.js";
import ProductSection from "pages-sections/HomePage-Sections/ProductSection.js";
import TeamSection from "pages-sections/HomePage-Sections/TeamSection.js";
import ContactSection from "pages-sections/HomePage-Sections/ContactSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function HomePage(props) {
  const classes = useStyles();
  const data = require("assets/teamData.json");
  const [teamData, setTeamData] = useState(data.chinese)
  const [nowLang, setNowLang] = useState("chinese")

  const { ...rest } = props;

  const changeLanguage = (lang) => {
    setTeamData(data[lang])
    setNowLang(lang)
  }

  return (
    <div>
      <Header
        color="transparent"
        thumbnail={teamData.main.thumbnail}
        brand={teamData.main.teamname}
        rightLinks={<HeaderLinks data={teamData.main.social} changeLanguage={changeLanguage} nowLang={nowLang}/>}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "black"
        }}
        {...rest}
      />
      <Parallax filter responsive>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <img className={classes.logo} src={teamData.main.logo} />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <h1>TryTech</h1>
              <h3 className={classes.slogan}>{teamData.main.slogan}</h3>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <AboutSection data={teamData.main.about} />
          <ProductSection data={teamData.portfolio} />
          <TeamSection data={teamData.main.team} />
          <ContactSection data={teamData.main.contact} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

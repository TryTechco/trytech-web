import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  title
} from "assets/jss/nextjs-material-kit.js";

const infoStyle = {
  infoArea: {
    maxWidth: "360px",
    margin: "0 auto",
    padding: "0px"
  },
  iconWrapper: {
    float: "left",
    marginTop: "24px",
    marginRight: "10px"
  },
  primary: {
    color: primaryColor
  },
  warning: {
    color: warningColor
  },
  danger: {
    color: dangerColor
  },
  success: {
    color: successColor
  },
  info: {
    color: infoColor
  },
  rose: {
    color: roseColor
  },
  gray: {
    color: grayColor
  },
  icon: {
    // width: "36px",
    height: "50px"
  },
  descriptionWrapper: {
    color: grayColor,
    overflow: "hidden"
  },
  title,
  description: {
    color: grayColor,
    overflow: "hidden",
    fontSize: "14px",
    textAlign: "start",
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  services: {
    color: primaryColor,
    width: '100%',
    overflow: "hidden",
    marginTop: "10px",
    fontSize: "14px",
    fontWeight: 'bold',
    textAlign: "start",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center'
  },
  iconWrapperVertical: {
    float: "none"
  },
  iconVertical: {
    width: "61px",
    height: "61px"
  },
  cardContainer: {
    display: 'flex',
  },
  backText: {
    backgroundColor: "#072643",
    padding: "10px"
  },
  collapseWrapper: {
    paddingLeft: "10px",
    paddingRight: "10px"
  }
};

export default infoStyle;

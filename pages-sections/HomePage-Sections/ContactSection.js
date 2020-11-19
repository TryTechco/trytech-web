import React from "react";
import { useEffect, useState } from 'react'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/trytech-material/pages/sections/contactStyle.js";

const axios = require('axios');

const useStyles = makeStyles(styles);

export default function ContactSection(props) {
  const classes = useStyles();
  const [mailContent, setMailContent] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: ""
  })
  const [invalid, setInvalid] = useState({
    Name: false,
    Email: false,
    Subject: false,
    Message: false
  })
  const [mailSent, setMailSent] = useState(false)
  const [sentMessage, setSentMessage] = useState(<a className={classes.success}></a>)

  const handleOnChange = (event) => {
    var _mailContent = mailContent
    
    _mailContent[event.target.id] = event.target.value

    setMailContent(_mailContent)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const mailinvalid = !(new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(mailContent.Email));
    console.log(mailinvalid)
    
    if(mailContent.Name === "" || mailinvalid || mailContent.Subject === "" || mailContent.Message === "")
    {
        setInvalid({
          Name: mailContent.Name === "",
          Email: mailinvalid,
          Subject: mailContent.Subject === "",
          Message: mailContent.Message === ""
        })
    }
    else
    {
        axios.post('https://nitamadermailcontroller.ngrok.io', {
            senderName: mailContent.Name,
            senderEmail: mailContent.Email,
            subject: mailContent.Subject,
            message: mailContent.Message
        })
        .then(function (response) {
            // handle success
            console.log(response);
            setMailSent(true)
            setSentMessage(<a className={classes.success}>
              {props.data.successMessage}
            </a>)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            setSentMessage(<a className={classes.failed}>
              {props.data.failedMessage}
            </a>)
        })
        .then(function () {
            // always executed
        });
    }
}

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={12}>
          <h2 className={classes.title}>{props.data.contactus}</h2>
          <h4 className={classes.description}>
            {props.data.contactmessage}
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText={props.data.name}
                  id="Name"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    error: invalid.Name,
                    onChange: handleOnChange
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText={props.data.email}
                  id="Email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    error: invalid.Email,
                    onChange: handleOnChange
                  }}
                />
              </GridItem>
              <CustomInput
                labelText={props.data.subject}
                id="Subject"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  error: invalid.Subject,
                  onChange: handleOnChange
                }}
              />
              <CustomInput
                labelText={props.data.message}
                id="Message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                  error: invalid.Message,
                  onChange: handleOnChange
                }}
              />
            </GridContainer>
          </form>
        </GridItem>
        <GridItem container xs={12} sm={12} md={4} className={classes.textCenter} justify="center">
          <Button type="submit" color="primary" onClick={handleSubmit}>{props.data.send}</Button>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} className={classes.textCenter}>
          {sentMessage}
        </GridItem>
      </GridContainer>
    </div>
  );
}

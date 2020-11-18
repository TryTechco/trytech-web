import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const axios = require('axios');

const Background = './images/background/header-background.jpg'

const useStyles = theme => ({
    root: {
        background: 'white',
        paddingTop: '20px'
    },
    form: {
        '& > *': {
          marginTop: theme.spacing(2),
          marginBottom: theme.spacing(2),
          width: '70vw'
        },
        display: 'inline-block',
        width: '70vw'
    },
    summitbutton: {
        width: '50px'
    }
});

class Contact extends Component {
    constructor(props)
    {
        super(props);
        
        this.state = {
            mailContent: {
                Name: "",
                Email: "",
                Subject: "",
                Message: ""
            },
            invalid: {
                Name: false,
                Email: false,
                Subject: false,
                Message: false
            },
            mailSent: false
        }

        this.handleValueChanged = this.handleValueChanged.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleValueChanged(event) {
        var mailContent = this.state.mailContent

        mailContent[event.target.id] = event.target.value

        this.setState({
            mailContent: mailContent
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        const mailinvalid = !(new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(this.state.mailContent.Email));
        console.log(mailinvalid)
        
        if(this.state.mailContent.Name === "" || mailinvalid || this.state.mailContent.Subject === "" || this.state.mailContent.Message === "")
        {
            this.setState({
                invalid: {
                    Name: this.state.mailContent.Name === "",
                    Email: mailinvalid,
                    Subject: this.state.mailContent.Subject === "",
                    Message: this.state.mailContent.Message === ""
                }
            })
        }
        else
        {
            const self = this;

            axios.post('https://nitamadermailcontroller.ngrok.io', {
                senderName: this.state.mailContent.Name,
                senderEmail: this.state.mailContent.Email,
                subject: this.state.mailContent.Subject,
                message: this.state.mailContent.Message
            })
            .then(function (response) {
                // handle success
                console.log(response);
                self.setState({
                    mailSent: true
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
        }
    }

    render() {
        const { classes, mediaQuery } = this.props;

        var successText = null;

        if(this.state.mailSent)
        {
            successText = 
            <Typography variant="h5">
                Mail is sent. We look forward to responding you!
            </Typography>
        }

        return(
            <section id="contact" className={classes.root}>
                <Typography variant="h2">
                    Contact Us
                </Typography>
                <form className={classes.form} noValidate autoComplete="off">
                    <TextField
                        required    
                        id="Name"
                        label="Name"
                        type="text"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        error={this.state.invalid.Name}
                        onChange={this.handleValueChanged}
                    />
                    <TextField
                        required    
                        id="Email"
                        label="Email"
                        type="email"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        error={this.state.invalid.Email}
                        onChange={this.handleValueChanged}
                    />
                    <TextField
                        required    
                        id="Subject"
                        label="Subject"
                        type="text"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        error={this.state.invalid.Subject}
                        onChange={this.handleValueChanged}
                    />
                    <TextField
                        required    
                        id="Message"
                        label="Message"
                        type="text"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        multiline
                        rows={4}
                        error={this.state.invalid.Message}
                        onChange={this.handleValueChanged}
                    />
                    {successText}
                    <Button type="submit" className={classes.summitbutton} variant="contained" color="primary" component="button" onClick={this.handleSubmit}>
                        Send
                    </Button>
                </form>
            </section>
        )
    }
}

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Contact);
import React from 'react'
import { Grid, Container, TextField, Typography, Button } from '@material-ui/core'
import useStyles from './styles'

function Contact() {

    const classes = useStyles()

    return (
        <div>
            <div className="page-container">
                <Container className={ classes.root } maxWidth="xlg">
                    <div className={ classes.content }>
                        <Typography className={ classes.head } variant="h3" align="center">Request Quote</Typography>
                        <form className={ classes.form } action="https://formsubmit.co/jonmohr@outlook.com" method="POST">
                            <Grid container spacing={2}>
                                <TextField className={ classes.textField } id="firstName" label="First Name" variant="outlined" required="true"></TextField>
                                <TextField className={ classes.textField } id="lastName" label="Last Name" variant="outlined" required="true"></TextField>
                                <TextField className={ classes.textField } id="email" label="E-Mail" variant="outlined" required="true"></TextField>
                                <TextField className={ classes.textField } id="projectSummary" label="Project Summary" variant="outlined" multiline="true" maxRows="10" required="true"></TextField>
                                <Button className={ classes.button } type="submit">Submit</Button>
                            </Grid>
                        </form>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Contact
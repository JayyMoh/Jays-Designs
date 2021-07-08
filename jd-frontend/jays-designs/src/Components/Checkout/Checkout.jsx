import React, { useState } from 'react'
import { Container, Button, Typography, Grid, TextField } from '@material-ui/core'
import useStyles from './styles'

function Checkout() {
    
    const classes = useStyles()

    return (
        <div>
            <div className="page-container">
                <Container maxWidth="xlg">
                    <Typography component="div" style={{ backgroundColor: 'rgb(30,30,30)', height: '100vh' }}>
                        <Typography className={ classes.head } variant="h3" align="center">Checkout</Typography>
                        <Typography className={ classes.sub } variant="h5" align="center">Shipping & Payment</Typography>
                        <form className={ classes.form } onSubmit=''>
                            <Grid container spacing={2}>
                                <TextField className={ classes.textField } id="firstName" label="First Name" variant="outlined" required="true"></TextField>
                                <TextField className={ classes.textField } id="lastName" label="Last Name" variant="outlined" required="true"></TextField>
                                <TextField className={ classes.textField } id="email" label="E-Mail" variant="outlined" required="true"></TextField>
                            </Grid>
                        </form>
                    </Typography> 
                </Container>
            </div>
        </div>
    )
}

export default Checkout
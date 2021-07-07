import React from 'react'
import { Typography, Container } from '@material-ui/core'

function About() {
    return (
        <div>
            <div className="page-container">
                <Container maxWidth="xlg">
                    <Typography component="div" style={{ backgroundColor: 'rgb(30,30,30)', height: '100vh' }} />
                    
                </Container>
            </div>
        </div>
    )
}

export default About
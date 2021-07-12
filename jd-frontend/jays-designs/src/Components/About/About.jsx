import React from 'react'
import { Container } from '@material-ui/core'
import useStyles from './styles'

function About() {

    const classes = useStyles()

    return (
        <div>
            <div className="page-container">
                <Container className={ classes.root } maxWidth="xl">
                    <div className={ classes.aboutContent }>
                        <img className={ classes.img } src='https://media.discordapp.net/attachments/822281280615219211/862485614485438474/jon.jpg?width=380&height=676' alt="Jonathan" />
                        <section className={ classes.text }>
                            Currently operating out of Louisville, KY, I'm a 25 year-old graphic designer and digital marketing strategist. First discovering Photoshop at the age of 12, I'm now someone with over 13 years of experience in just about every area of design and print work needed in today's business climate. In addition to being an Adobe Certified Expert in Photoshop CC, I also have experience in Illustrator, Acrobat, InDesign, as well as a little bit of Dreamweaver and After Effects.
                            I pride myself on my ability to understand my clients project needs and desires and being able to deliver sometimes more than they knew they wanted. I'm constantly working not only to improve my current abilities, but stay up to date with current techniques and trends. Though young, my passion for designing and the industry is apparent to anyone who's worked with me.
                            I've designed for clients all around the country and even some internationally, including many local clients here in Louisville, but also in Columbus, San Diego, Tampa, a website company in Russia, and a content creator/streamer in Poland.
                        </section>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default About
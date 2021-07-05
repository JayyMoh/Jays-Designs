import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <div className='carousel-container'>
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <img
                        className="d-block w-100 carousel-img"
                        src="https://cdn.discordapp.com/attachments/822281280615219211/861723209429942282/eJwNyEEOhCAMAMC_8ABaVCp49CcECZKoJbSeNvv33TnOx7zjMps5VbtsAEeTzOOwojxSLbYy16uk3sRmviGppnze5VGB2TlaKKKf.png"
                        alt="Exotic"
                        />
                        <Carousel.Caption>
                        <h3>Client Wallpaper</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        className="d-block w-100 carousel-img"
                        src="https://cdn.discordapp.com/attachments/822281280615219211/861723249749786674/alex_design_1.png"
                        alt="Exotic2"
                        />
                        <Carousel.Caption>
                        <h3>Client Wallpaper</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        className="d-block w-100 carousel-img"
                        src="https://cdn.discordapp.com/attachments/822281280615219211/861723427111174154/Logo-Drop.png"
                        alt="MS Logo"
                        />
                        <Carousel.Caption>
                        <h3>Client Logo</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='view-work-btn'>
                <Button>
                    <Link to='projects'>
                        View More
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default Home
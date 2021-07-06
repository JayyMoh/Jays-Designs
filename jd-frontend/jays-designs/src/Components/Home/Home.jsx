import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function Home() {
    return (
        <div className='page-container'>
            <div className='carousel-container'>
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <img
                        className="d-block w-100 carousel-img"
                        src="https://wallpaperaccess.com/full/112181.jpg"
                        alt="wallpaper"
                        />
                        <Carousel.Caption>
                        <h3>Client Wallpaper</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        className="d-block w-100 carousel-img"
                        src="https://wallpaper.dog/large/20449397.jpg"
                        alt="abstract"
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
        </div>
    )
}

export default Home
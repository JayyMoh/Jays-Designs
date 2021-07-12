import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography, useMediaQuery } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

import makeStyles from './styles'


function Navbar({ totalItems }) {

    const classes = makeStyles()

    return (
        <div>
            <AppBar position="fixed" className={ classes.appBar } color="inherit">
                <Toolbar>
                    <IconButton edge="start" className={ classes.menuButton } color="inherit" aria-label="menu" >
                        {<MenuIcon />}
                    </IconButton>
                    <Typography component={Link} to="/" className={ classes.title } color="inherit">
                        <img src="https://cdn.discordapp.com/attachments/822281280615219211/862024271659925514/jd.png" alt="Jays Designs" height="30px" className={ classes.image } />
                    </Typography>
                    <ul className={ classes.navUl }>
                        <li className={ classes.navLi }>
                            <Link className={ classes.Link } to='/'>
                                Home
                            </Link>
                        </li>
                        <li className={ classes.navLi }>
                            <Link className={ classes.Link } to='/projects'>
                                My Work
                            </Link>
                        </li>
                        <li className={ classes.navLi }>
                            <Link className={ classes.Link } to='/about'>
                                About Me
                            </Link>
                        </li>
                        <li className={ classes.navLi }>
                            <Link className={ classes.Link } to='/shop'>
                                Shop
                            </Link>
                        </li>
                        <li className={ classes.navLi }>
                            <Link className={ classes.Link } to='/contact'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className={ classes.grow } />
                    <div className={ classes.button }>
                        <Link className={ classes.Link } to='/cart'>
                            <IconButton aria-label="Show cart items" color="inherit">
                                <Badge badgeContent={ totalItems }>
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar

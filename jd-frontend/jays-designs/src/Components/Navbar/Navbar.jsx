import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography, MenuItem, Menu } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { Link } from 'react-router-dom'

import makeStyles from './styles'

const Navbar = ({ totalItems }) => {

    const classes = makeStyles()

    return (
        <div>
            <AppBar position="fixed" className={ classes.appBar } color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={ classes.title } color="inherit">
                        <img src="https://cdn.discordapp.com/attachments/822281280615219211/862024271659925514/jd.png" alt="Jays Designs" height="25px" className={ classes.image } />
                        Jays Designs
                    </Typography>
                    <ul className='nav-ul'>
                        <li className='nav-li'>
                            <Link className={ classes.Link } to='/'>
                                Home
                            </Link>
                        </li>
                        <li className='nav-li'>
                            <Link className={ classes.Link } to='/projects'>
                                My Work
                            </Link>
                        </li>
                        <li className='nav-li'>
                            <Link className={ classes.Link } to='/about'>
                                About Me
                            </Link>
                        </li>
                        <li className='nav-li'>
                            <Link className={ classes.Link } to='/shop'>
                                Shop
                            </Link>
                        </li>
                        <li className='nav-li'>
                            <Link className={ classes.Link } to='/contact'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className={ classes.grow } />
                    <div className={ classes.button }>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={ totalItems }>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar

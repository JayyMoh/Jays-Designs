import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className='nav-container'>
            <nav>
                <ul className='nav-ul'>
                    <li className='nav-li'>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li className='nav-li'>
                        <Link to='/projects'>
                            My Work
                        </Link>
                    </li>
                    <li className='nav-li'>
                        <Link to='/about'>
                            About Me
                        </Link>
                    </li>
                    <li className='nav-li'>
                        <Link to='/shop'>
                            Shop
                        </Link>
                    </li>
                    <li className='nav-li'>
                        <Link to='/contact'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
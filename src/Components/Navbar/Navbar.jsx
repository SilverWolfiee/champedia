import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/images/champedia-logo.jpg'
import searchIconLight from '../../assets/images/search-w.png'
import searchIconDark from '../../assets/images/search-b.png'
import toggle_light from '../../assets/images/night.png'
import toggle_dark from '../../assets/images/day.png'

const Navbar = ({ theme, setTheme }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const toggle_mode = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };  
    })

    return (
        <div className={`navbar ${theme} ${isScrolled ? 'scrolled' : ''}`}>
            <img src={logo} alt="" className='logo' />

            <ul>
                <li>
                    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                        Champedia
                    </Link>
                </li>
                <li>Esports</li>
                <li>Sports</li>
            </ul>

            <div className='search-box'>
                <input type="text" placeholder='Search' />
                <img src={theme === 'light' ? searchIconLight : searchIconDark} alt="" />
            </div>

            <img
                onClick={toggle_mode}
                src={theme === 'light' ? toggle_light : toggle_dark}
                alt=""
                className='toggle-icon'
            />
        </div>
    )
}

export default Navbar
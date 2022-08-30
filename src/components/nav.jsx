import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = () => {
  return (
    <StyledNav>
        <h1><Link to="/" className='logo'>Portfolio</Link></h1>
        <ul>
            <li>
                <Link to="/">1. About Us</Link>
            </li>
            <li>
                <Link to= "ourWork">2. Our Work</Link>
            </li>
            <li>
                <Link to = "contactUs">3. Contact Us</Link>
            </li>
        </ul>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
    display: Flex;
    min-height: 10vh;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background-color: #282828;
    a {
        color: white;
        text-decoration: none;
    }
    .logo {
        font-size: 1.5rem;
        font-weight: lighter;
    }
    ul {
        display: flex;
        list-style-type: none;
    }
    li   {
        padding-left: 10rem;
        position: relative;
    }
`

export default Nav
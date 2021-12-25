import React from 'react'
import { Container } from 'react-bootstrap';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className='app-header'>
            <Container>
                <div className='header-wrapper'>
                    <div className='header-left'>M.K</div>
                    <div className='header-right'>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                        </ul>
                    </div>
                </div>
            </Container>


        </div>
    )
}


export default Header
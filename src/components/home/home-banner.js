import React from 'react';
import { Container } from 'react-bootstrap';
import bannerImg from '../../assets/images/banner-img.jpg';

import './home.scss';

const HomeBanner = () => {
    return (
        <Container>
            <div className='banner-wrapper'>
                <div className='banner-inner-left scale-up-center'>
                    <div className='intro-txt'>
                        Hi! This is <span>Mukesh!</span>
                    </div>
                    <div className='designation tracking-in-expand'>
                        Front End Developer
                    </div>
                    <div className='intro-role'>
                        <p>React Redux Develooper</p>
                        <p>Angular Developer</p>
                        <p>Mearn | Mean Developer</p>
                        <p>Open Source Contributor</p>
                    </div>
                </div>
                <div className='banner-inner-right'>
                    {/* <img src={bannerImg} alt='logo' /> */}
                </div>
            </div>
        </Container>

    )
}

export default HomeBanner;
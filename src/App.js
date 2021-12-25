import React from 'react';

import { Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';

import Header from './shared/header/header';
import AppRouter from './core/app-router';
import Footer from './shared/footer/footer';


function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Container fluid>
        <div className="app-wrapper">
        </div>
      </Container>
      <Footer />
      <AppRouter />

    </BrowserRouter>
  );
}

export default App;

import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer';
import BandsContainer from './containers/BandsContainer';
import BandsContainerTop from './containers/BandsContainerTop.js';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import About from './components/About';
import FavoriteBand from './components/FavoriteBand';
import LeastFavoriteBand from './components/LeastFavoriteBand';
import Band from './components/Band';
import LaunchIndex from './containers/BandsContainerTop'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <Footer />
      </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='bands' element={<BandsContainerTop />} >
            <Route path="bands/" element={<LaunchIndex />}/>            
          </Route>
          <Route path='bands/favorite-band' element={<FavoriteBand />}/>
          <Route path='bands/least-favorite-band' element={<LeastFavoriteBand />}/>
          <Route path='/about' element={<About />}/>
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </Router>
    );
  }
}

export default App;

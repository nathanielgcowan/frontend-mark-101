import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.js';
import Footer from './components/Footer';
import BandsContainer from './containers/BandsContainer';
import BandsContainerTop from './containers/BandsContainerTop.js';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import About from './components/About';
import FavoriteBand from './components/FavoriteBand';
import LeastFavoriteBand from './components/LeastFavoriteBand';
import BandCard from './components/BandCard';

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Footer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='bands' element={<BandsContainerTop />} >
             <Route path=":bandId" element={<BandCard />}/>
            <Route path="edit" element={<BandEdit/>}>
              <Route path=":bandId" element={<BandEdit/>}/>
            </Route>           
          </Route>
          <Route path='bands/favorite-band' element={<FavoriteBand />}/>
          <Route path='bands/least-favorite-band' element={<LeastFavoriteBand />}/>
          <Route path='about' element={<About />}/>
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </Router>
    );
  }
}

export default App;

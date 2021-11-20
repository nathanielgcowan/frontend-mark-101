import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Bands from './containers/Bands';
import About from './components/About';
import FavoriteBand from './components/FavoriteBand';
import LeastFavoriteBand from './components/LeastFavoriteBand';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
      </div>
        <Routes>
          <Route path='/bands' element={<Bands />} >
          <Route path='/' element={<Bands />} />
          </Route>
          <Route path='bands/favorite-band' element={<FavoriteBand />}/>
          <Route path='bands/least-favorite-band' element={<LeastFavoriteBand />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </Router>
    );
  }
}

export default App;

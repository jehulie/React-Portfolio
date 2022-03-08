import React, { Component } from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Resume from './components/Resume';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <About />
        <Work />
        <Contact />
        <Resume />
        <Footer />
      </div>
    );
  }
}

export default App;
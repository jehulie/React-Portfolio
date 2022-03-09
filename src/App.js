import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
      <div className="App">
        <Header/>
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    );
  }

export default App;
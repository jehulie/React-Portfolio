// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';
import backgroundPic from './assets/images/corrugated-white-medres.jpeg'

function App() {
    return (
        <div style={{ backgroundImage: `url(${backgroundPic})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div class="blur">
                <HashRouter basename="/">
                    <Header />
                    <main>
                    <Routes>
                            <Route exact path="/"  element={<About />}/>
                            <Route path="/work" element={<Work />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/resume" element={<Resume />}  />
                            </Routes>
                    </main>
                    <Footer />
                </HashRouter>
            </div>
        </div>
    );
}


export default App;

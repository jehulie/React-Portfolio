import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';
import backgroundPic from '../src/assets/images/corrugated-white-medres.jpeg'

function App () {
    return (
        <div style={{backgroundImage: `url(${backgroundPic})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <div class="blur">
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element = {<About />} />
                    <Route path="/work" element = {<Work />} />
                    <Route path="/contact" element = {<Contact />} />
                    <Route path="/resume" element = {<Resume />} />
                    <Route path="/react-portfolio" element = {<About />} />
                </Routes>
            </main>
            <Footer />
        </Router>
        </div>
        </div>
    );
}

export default App;
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';

function App () {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element = {About} />
                    <Route path="/work" element = {Work} />
                    <Route path="/contact" element = {Contact} />
                    <Route path="/resume" element = {Resume} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;

import React, {useState} from 'react';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Work from '../components/Work/Work';
import Contact from '../components/Contact/Contact';
import Resume from '../components/Resume/Resume';
import Footer from '../components/Footer/Footer';

export default function pageChoice () {
    const [currentPage, setCurrentPage] = useState('About');
  
    const displayPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Work') {
        return <Work />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
    }
  
  }
  
  const handlePageChange = (page) => setCurrentPage (page);
  
      return (
        <div className="App">
          <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
        {displayPage()}
          <Footer />
        </div>
      );
    }
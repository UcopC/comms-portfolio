import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './Projects';
import { useState } from 'react';
import Gallery from './components/Gallery';
import Price from './components/Price';

function App() {
  const [currentPage, setCurrentPage] = useState('HOME');
  const [filter, setFilter] = useState('ALL');
  return (
    <div>
      <Navbar
        activeTab={currentPage}
        onTabChange={(tab) => setCurrentPage(tab)}
      />

      {currentPage === 'HOME' && (
        <Hero onExplore={() => setCurrentPage('GALLERY')} />
      )}

      {currentPage === 'GALLERY' && <Gallery />}
      {currentPage === 'PRICE' && <Price onTos={() => setCurrentPage('TOS')} />}
    </div>
  );
}

export default App;

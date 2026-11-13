import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Tos from './components/Tos';
import { useState } from 'react';
import Gallery from './components/Gallery';
import Price from './components/Price';

function App() {
  const [currentPage, setCurrentPage] = useState('HOME');

  return (
    <div>
      <Navbar
        activeTab={currentPage}
        onTabChange={(tab) => setCurrentPage(tab)}
      />

      {currentPage === 'HOME' && <Hero />}
      {currentPage === 'GALLERY' && <Gallery />}
      {currentPage === 'PRICE' && (
        <Price onTos={() => setCurrentPage('TERMS AND CONDITIONS')} />
      )}
      {currentPage === 'TERMS AND CONDITIONS' && <Tos />}
    </div>
  );
}

export default App;

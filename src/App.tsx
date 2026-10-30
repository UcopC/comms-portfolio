import Navbar from './components/Navbar';
import Hero from './Hero';
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
        <Hero
          name='Heeder!'
          text='words words words lorem ipsum type shi waaaa'
          filter={filter}
        />
      )}

      {currentPage === 'GALLERY' && <Gallery />}
      {currentPage === 'PRICE' && <Price />}
    </div>
  );
}

export default App;

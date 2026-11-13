import HeroDesktop from './HeroDesktop';
import './Hero.css';

function Hero() {
  return (
    <>
      <div className='hero-desktop'>
        <HeroDesktop />
      </div>
      <div className='hero-mobile'></div>
    </>
  );
}

export default Hero;

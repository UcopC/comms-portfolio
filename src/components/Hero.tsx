import './CSS/Hero.css';

function Hero() {
  return (
    <div className='hero-page'>
      <img src='/asset/parental.webp' className='parental-advisory' />
      <div className='name-wrapper'>
        <span className='freelance-artist'>FREELANCE ARTIST</span>
        <h1 className='name'>YUYU</h1>
      </div>
      <div className='red-box'></div>
      <div className='back-camro'>
        <img src='/asset/camro.svg' alt='awesome fucking car' />
      </div>
      <div className='me'>
        <img src='/asset/yuyu.svg' alt='faggot' />
      </div>
    </div>
  );
}

export default Hero;

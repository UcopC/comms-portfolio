import './CSS/Hero.css';

interface HereProps {
  onExplore?: () => void;
}
function Hero(props: HereProps) {
  return (
    <div className='hero-wrapper'>
      <div className='hero-breadcrumbs'>
        <div>&gt; RENDERING...</div>
        <div>Y:1987/Chevrolet/Camaro</div>
      </div>

      <div className='hero-character-section'>
        <div className='character-placeholder'>CHARACTER HERE</div>
      </div>

      <div className='hero-slant-bg' />

      <div className='hero-content-section'>
        <div className='name-row'>
          <h1 className='name'>YUYU</h1>
          <span className='slash-number'>/01</span>
        </div>

        <div className='freelance-badge'>FREELANCE_ARTIST</div>

        <div className='info-card'>
          <span className='info-tag'>//WOOF</span>
          <p className='info-desc'>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum
          </p>

          <button className='explore-btn' onClick={props.onExplore}>
            EXPLORE_WORK
            <a className='arrow'>↗</a>
          </button>
        </div>
      </div>

      <div className='hero-tech-strip'>
        <div className='barcode'>|||||||||||</div>
        <div className='strip-vertical-text'>-- COMMS SITE 2026 --</div>
      </div>
    </div>
  );
}

export default Hero;

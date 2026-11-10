import './CSS/Price.css';

interface HereProps {
  onTos?: () => void;
}

function Price(props: HereProps) {
  return (
    <div className='price-page'>
      <div className='bg-blur'>
        <img src='/bg/gwagonadjust.jpg' alt='backdrop' />
      </div>
      <div className='price-container'>
        <div className='price-title'>PRICING RATE</div>
        <div className='sample-container'>
          <div className='barcode-container'>
            <img src='/asset/barcode_code1.svg' />
          </div>
          <div className='desc-container'>
            <div className='text-box'>
              <div className='title-card'>FULL SCENE</div>
              <div className='rate-row'>
                <div className='rate-num'>80-100</div>
                <span className='rate-currency'>MYR</span>
              </div>
              <div className='rate-row'>
                <div className='rate-num'>60-80</div>
                <span className='rate-currency'>USD</span>
              </div>

              <div className='add-char'>
                <hr />
                ADDITIONAL CHARACTERS / OBJECTS:
                <br />
                + 40MYR || 20USD
                <hr />
              </div>

              <span className='price-note'>
                prices are in USD for international payment and MYR for
                Malaysians.
              </span>
            </div>
            <div className='image-box'>
              <img src='/sample/sample.jpg' className='sample-image' />
            </div>
          </div>
        </div>
        <button className='tos-btn' onClick={props.onTos}>
          terms and conditions ➔
        </button>
      </div>
    </div>
  );
}

export default Price;

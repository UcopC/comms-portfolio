import './CSS/Price.css';
import { useState } from 'react';

function Price() {
  return (
    <div className='price-container'>
      <div className='price-title'>PRICING RATE</div>

      <div className='sample-container'>
        <div className='desc'>helo</div>
        <div className='image-card'>
          <img src='/sample/89c49b88f635eebf431f0f1b3dce59b0.jpg'></img>
        </div>
      </div>

      <div className='sample-container'>
        <div className='desc'>helo</div>
        <div className='image-card'>
          <img src='/sample/89c49b88f635eebf431f0f1b3dce59b0.jpg'></img>
        </div>
      </div>

      <div className='sample-container'>
        <div className='desc'>helo</div>
        <div className='image-card'>
          <img src='/sample/89c49b88f635eebf431f0f1b3dce59b0.jpg'></img>
        </div>
      </div>
    </div>
  );
}

export default Price;

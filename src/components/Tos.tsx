import React from 'react';
import './CSS/Tos.css';

interface termSection {
  id: number;
  terms: string;
}

const TOS_LIST: termSection[] = [
  {
    id: 1,
    terms:
      'Accepted payment methods include Wise, Paypal (USD) and DuitNow (MYR)',
  },
  {
    id: 2,
    terms:
      'I reserved the right to decline any commission, without the justification of my decision.',
  },
  {
    id: 3,
    terms:
      'All commissioned artwork is for personal use only. Commercial use, resale or monetization is strictly prohibited.',
  },
  {
    id: 4,
    terms:
      'You are welcome to share the artwork on social media with a proper credit clearly attributed to me.',
  },
  {
    id: 5,
    terms:
      'the standard turnaround time for a commission is between 4 to 6 weeks.',
  },
  {
    id: 6,
    terms:
      'In the event that I am unable to complete the commission, you will be notified immediately and a full refund will be issued.',
  },
];

function Tos() {
  return (
    <div className='tos-page'>
      <div className='tos-wrapper'>
        <div className='title-card'>
          <h1 className='title'>TERMS AND CONDITIONS</h1>
          <div className='acknowledge'>
            By commissioning me, you have acknowledge, read, understood and
            agreed to these terms and conditions.
          </div>
        </div>
        <div className='tos-panel'>
          <div className='terms'>
            {TOS_LIST.map((section) => (
              <div key={section.id} className='tos-section-card'>
                <p className='terms-list'> &gt; {section.terms}</p>
              </div>
            ))}
          </div>
          <div className='eye-image'>
            <img src='/asset/eye.svg' alt='i see you.' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tos;

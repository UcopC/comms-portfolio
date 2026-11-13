import './CSS/Navbar.css';
import {
  FaTelegram,
  FaXTwitter,
  FaDiscord,
  FaBars,
  FaXmark,
} from 'react-icons/fa6';
import { useState } from 'react';

interface NavbarProps {
  activeTab: string;
  onTabChange: (tabName: string) => void;
}

function Navbar(props: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['HOME', 'GALLERY', 'PRICE', 'TERMS AND CONDITIONS'];

  const handleNavClick = (item: string) => {
    props.onTabChange(item);
    setIsOpen(false);
  };

  return (
    <>
      <nav className='navbar'>
        <div className='nav-links'>
          {navItems.map((item) => (
            <button
              key={item}
              className={`nav-btn ${props.activeTab === item ? 'active' : ''}`}
              onClick={() => props.onTabChange(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className='nav-social'>
          <a
            href='https://t.me/ucop240'
            className='social-icon'
            title='Telegram'
          >
            <FaTelegram />
          </a>
          <a
            href='https://x.com/ucop240'
            className='social-icon'
            title='Twitter'
          >
            <FaXTwitter />
          </a>
          <a
            href='https://discord.com/users/549144536270766080/'
            className='social-icon'
            title='Discord'
          >
            <FaDiscord />
          </a>
        </div>
      </nav>
      {/*          mobile UI          */}
      <button
        className='hamburg'
        onClick={() => setIsOpen(!isOpen)}
        aria-lable='Toggle Menu'
      >
        {isOpen ? <FaXmark /> : <FaBars />}
      </button>

      <div
        className={`outside-click ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(false)}
      />

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className='links'>
          {navItems.map((item) => (
            <button
              key={item}
              className={`link-btn ${props.activeTab === item ? 'active' : ''}`}
              onClick={() => handleNavClick(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className='sidebar-social'>
          <a
            href='https://t.me/ucop240'
            className='social-icon'
            title='Telegram'
          >
            Telegram
            <FaTelegram />
          </a>
          <a
            href='https://x.com/ucop240'
            className='social-icon'
            title='Twitter'
          >
            Twitter
            <FaXTwitter />
          </a>
          <a
            href='https://discord.com/users/549144536270766080/'
            className='social-icon'
            title='Discord'
          >
            Discord
            <FaDiscord />
          </a>
        </div>
      </aside>
    </>
  );
}

export default Navbar;

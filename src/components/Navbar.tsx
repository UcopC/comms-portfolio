import './CSS/Navbar.css';
import {
  FaTelegram,
  FaXTwitter,
  FaInstagram,
  FaDiscord,
} from 'react-icons/fa6';

interface NavbarProps {
  activeTab: string;
  onTabChange: (tabName: string) => void;
}

function Navbar(props: NavbarProps) {
  const navItems = ['HOME', 'GALLERY', 'PRICE', 'TOS'];
  //TOS is terms and condition

  return (
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
        <a href='#telegram' className='social-icon' title='Telegram'>
          {(<FaTelegram />) as any}
        </a>
        <a href='#twitter' className='social-icon' title='Twitter'>
          {(<FaXTwitter />) as any}
        </a>
        <a href='#instagram' className='social-icon' title='Instagram'>
          {(<FaInstagram />) as any}
        </a>
        <a href='#discord' className='social-icon' title='Discord'>
          {(<FaDiscord />) as any}
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

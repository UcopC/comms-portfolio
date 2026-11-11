import './CSS/Navbar.css';
import { FaTelegram, FaXTwitter, FaDiscord } from 'react-icons/fa6';

interface NavbarProps {
  activeTab: string;
  onTabChange: (tabName: string) => void;
}

function Navbar(props: NavbarProps) {
  const navItems = ['HOME', 'GALLERY', 'PRICE', 'TERMS AND CONDITIONS'];

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
        <a href='https://t.me/ucop240' className='social-icon' title='Telegram'>
          {(<FaTelegram />) as any}
        </a>
        <a href='https://x.com/ucop240' className='social-icon' title='Twitter'>
          {(<FaXTwitter />) as any}
        </a>
        <a
          href='https://discord.com/users/549144536270766080/'
          className='social-icon'
          title='Discord'
        >
          {(<FaDiscord />) as any}
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

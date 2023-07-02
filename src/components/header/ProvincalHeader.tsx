import React from 'react';
import './ProvincalHeader.scss';
import provincialHero from '../../assets/Provincial/provincal-hero.png';
import NavLink from './NavLink/NavLink';

interface ProvincalHeaderProps {}

const ProvincalHeader: React.FC<ProvincalHeaderProps> = () => {
  return (
    <div className='ProvincalHeader'>
      <div className='ProvincalHeaderHero'>
        <img src={provincialHero} className='ProvincalHeaderHeroImg' alt='Provincal Hero' />
        <nav className="navigation">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/story">Our Story</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ProvincalHeader;
import React from 'react';
import './MenuHeader.scss';
import { Typography} from 'antd';
import NavLink from '../../header/NavLink/NavLink';

const { Title, Text } = Typography;

type MenuHeaderProps = {};

const MenuHeader: React.FC<MenuHeaderProps> = (props: MenuHeaderProps) => {
  return (
    <div className='menuHeader'>
      <nav className="navigation">
        <ul>
          <li><Text><NavLink to="/menu/plates">Plates</NavLink></Text></li>
          <li><Text><NavLink to="/menu/cocktails">Cocktails</NavLink></Text></li>
          <li><Text><NavLink to="/menu/wine">Wine</NavLink></Text></li>
          <li><Text><NavLink to="/menu/spirits">Spirits</NavLink></Text></li>
          <li><Text><NavLink to="/menu/tap">Rotating Tap</NavLink></Text></li>
          <li><Text><NavLink to="/menu/coffee">Specialty Coffee</NavLink></Text></li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuHeader;
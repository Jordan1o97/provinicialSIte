import React from 'react';
import { useMatch, Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  const match = useMatch(to);

  return (
    <Link to={to} style={{ textDecoration: match ? 'underline' : 'none' }}>
      {children}
    </Link>
  );
};

export default NavLink;
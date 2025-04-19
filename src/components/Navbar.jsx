import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/BrightSparksLogo.png';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', to: '/' },
    { name: 'Programs', to: '/programs' },
    { name: 'Join', to: '/join' },
    { name: 'Volunteer', to: '/internships' },
    { name: 'Impact', to: '/impact' },
    { name: 'About', to: '/origin' },
    { name: 'Connect', to: '/connect' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>

        <Logo to="/">
          <img src={logo} alt="Bright Sparks Academy" />
        </Logo>

        <NavLinks isOpen={isOpen}>
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              active={location.pathname === link.to ? 1 : 0}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </NavLinks>

        <DonateButton to="/donate">
          Donate
        </DonateButton>
      </NavContainer>

      {isOpen && <Backdrop onClick={() => setIsOpen(false)} />}
    </Nav>
  );
};

export default Navbar;

// Styled Components

const Nav = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  background: #ffffff;
  z-index: 1000;
  box-shadow: ${({ scrolled }) =>
    scrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: box-shadow 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  img {
    height: 40px;
    transition: transform 0.3s ease;
  }
  &:hover img {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: #ffffff;
    flex-direction: column;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    transition: transform 0.3s ease;
    padding-top: 20px;
    z-index: 999;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  color: #000000;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  padding: 8px 16px;
  margin: 0 4px;
  border-radius: 9999px;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 217, 0, 0.1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 16px;
    height: 2px;
    width: ${({ active }) => (active ? 'calc(100% - 32px)' : '0')};
    background: #ffd900;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: calc(100% - 32px);
  }

  @media (max-width: 768px) {
    margin: 8px 0;
    width: 100%;
    text-align: center;
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const DonateButton = styled(Link)`
  background: #ffd900;
  color: #000000;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  padding: 12px 20px;
  border-radius: 9999px;
  text-decoration: none;
  transition: background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
  animation: ${pulse} 10s ease-in-out infinite;

  &:hover {
    background: #000000;
    color: #ffd900;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    margin-left: 0;
    position: fixed;
    top: 15px;
    right: 20px;
  }
`;

const Hamburger = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    span {
      width: 25px;
      height: 3px;
      background: #000000;
      margin: 4px 0;
      border-radius: 3px;
      transition: transform 0.3s ease;
    }
  }
`;

const Backdrop = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    height: calc(100% - 60px);
    background: rgba(0,0,0,0.3);
    z-index: 998;
  }
`;

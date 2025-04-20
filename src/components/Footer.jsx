import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../images/BrightSparksLogo.png'; // Bright Sparks Logo
import { FaLinkedin, FaYoutube, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

const Footer = () => (
  <FooterWrapper>
    <FooterContainer>
      <LogoSection>
        <Logo src={logo} alt="Bright Sparks Academy" />
        <EIN>EIN: 33-1317158</EIN>
        {/* Social Media Links */}
        <SocialSection>
          <SocialLink href="https://linkedin.com/company/BrightSparksAcademy" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="https://youtube.com/BrightSparksAcademy" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </SocialLink>
          <SocialLink href="https://x.com/BrightSparksAcad" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialLink>
          <SocialLink href="https://www.tiktok.com/@brightsparksacademy" target="_blank" rel="noopener noreferrer">
            <SiTiktok />
          </SocialLink>
          <SocialLink href="https://facebook.com/BrightSparksAcademy" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </SocialLink>
          <SocialLink href="https://instagram.com/BrightSparksAcademy" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </SocialLink>
        </SocialSection>
      </LogoSection>

      <NavSection>
        <NavTitle>Programs & Join</NavTitle>
        <NavList>
          <NavItem><Link to="/">Home</Link></NavItem>
          <NavItem><Link to="/programs">Programs</Link></NavItem>
          <NavItem><Link to="/join">Join</Link></NavItem>
          <NavItem><Link to="/volunteer">Volunteer</Link></NavItem>
        </NavList>
      </NavSection>
      <NavSection>
        <NavTitle>Explore</NavTitle>
        <NavList>
          <NavItem><Link to="/impact">Impact</Link></NavItem>
          <NavItem><Link to="/origin">About</Link></NavItem>
          <NavItem><Link to="/connect">Connect</Link></NavItem>
          <NavItem><Link to="/contact">Contact</Link></NavItem>
        </NavList>
      </NavSection>

      <ContactSection>
        <ContactTitle>Contact Us</ContactTitle>
        <ContactItem><a href="mailto:reach@brightsparks.academy">reach@brightsparks.academy</a></ContactItem>
        <ContactItem>(650) 272-7186</ContactItem>
      </ContactSection>

      <NewsletterSection>
        <NewsletterTitle>Stay Updated</NewsletterTitle>
        <NewsletterForm>
          <Input type="email" placeholder="Your email address" />
          <SubscribeButton>Subscribe</SubscribeButton>
        </NewsletterForm>
      </NewsletterSection>
    </FooterContainer>
    <Copyright>
      © {new Date().getFullYear()} Bright Sparks Academy. All Rights Reserved.
    </Copyright>
  </FooterWrapper>
);

export default Footer;

// Styled Components

const FooterWrapper = styled.footer`
  background: #fffbeb;
  color: #000;
  padding: 4rem 2rem 2rem;
  font-family: 'Inter', sans-serif;
`;

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: start;
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Logo = styled.img`
  height: 80px;
  margin-bottom: 0.5rem;
`;

const EIN = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const NavSection = styled.div``;

const NavTitle = styled.h4`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin-bottom: 0.75rem;
  a {
    color: #000;
    font-size: 1rem;
    text-decoration: none;
    transition: color 0.2s ease;
    &:hover {
      color: #ffd900;
    }
  }
`;

const ContactSection = styled.div`
  margin: 0;
  padding: 0;
`;

const ContactTitle = styled.h4`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const ContactItem = styled.p`
  font-size: 1rem;
  margin: 0.75rem 0;
  a {
    color: #000;
    text-decoration: underline;
  }
`;

const NewsletterSection = styled.div`
  margin: 0;
  padding: 0;
`;

const NewsletterTitle = styled.h4`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  width: 100%;
  max-width: 300px;
  padding: 0.75rem 1.25rem;
  border: 1px solid #ddd;
  border-radius: 9999px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #ffd900;
    box-shadow: 0 0 0 3px rgba(255, 217, 0, 0.3);
  }
`;

const SubscribeButton = styled.button`
  background: #ffd900;
  color: #000;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 9999px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
  &:hover {
    background: #e6c800;
    transform: scale(1.05);
  }
`;

const Copyright = styled.p`
  text-align: center;
  font-size: 0.9rem;
  margin-top: 2rem;
`;
const SocialSection = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  display: inline-block;
  width: 24px;
  height: 24px;
  svg {
    width: 100%;
    height: 100%;
    color: #000;
  }
  &:hover {
    opacity: 0.8;
  }
`;
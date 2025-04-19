import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import BrightSparksLogo from '../images/BrightSparksLogo.png';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
  * {
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background: #fff;
    color: #000;
    line-height: 1.6;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  *:focus {
    outline: none;
  }
  *:focus-visible {
    outline: 2px dashed #000;
    outline-offset: 3px;
  }
  .reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  .reveal.active {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Header = styled.header`
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Logo = styled.img`
  height: 50px;
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #000;
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  li:not(:first-child) {
    margin-left: 2rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    background: #fff;
    padding: 1rem 1.5rem;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    /* Show or hide the menu based on prop 'open' */
    display: ${props => (props.open ? 'flex' : 'none')};
    li {
      margin: 0.5rem 0;
    }
  }
`;

const NavLink = styled.a`
  font-size: 1rem;
  font-weight: 500;
  color: #000;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: background 0.3s;
  &:hover {
    background: #FFD900;
  }
`;

const NavButton = styled.a`
  font-size: 1rem;
  font-weight: 600;
  background: #FFD900;
  color: #000;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background 0.3s;
  &:hover {
    background: #F0C000;
  }
`;

const Main = styled.main`
  flex: 1;
`;

const HeroSection = styled.section`
  padding: 6rem 0;
  background: #FFD900;
  color: #000;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin: 1rem 0 2rem;
`;

const HeroButton = styled.a`
  display: inline-block;
  background: #000;
  color: #FFD900;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 4px;
  transition: background 0.3s, color 0.3s;
  &:hover {
    background: #FFD900;
    color: #000;
  }
`;

const Section = styled.section`
  padding: 4rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin: 0 0 1rem;
`;

const SectionText = styled.p`
  max-width: 600px;
  margin: 0 auto 2rem;
  text-align: center;
`;

const TwoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const Column = styled.div`
  flex: 1;
  text-align: left;
`;

const ColumnTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  display: inline-block;
  border-bottom: 0.25rem solid #FFD900;
  padding-bottom: 0.25rem;
  margin: 0 0 1rem;
`;

const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

const ContactFormStyled = styled(Form)`
  max-width: 500px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 2px solid #000;
  border-radius: 4px;
  font: inherit;
  &:focus {
    border-color: #FFD900;
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 2px solid #000;
  border-radius: 4px;
  font: inherit;
  resize: vertical;
  &:focus {
    border-color: #FFD900;
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const FormButton = styled.button`
  background: #FFD900;
  color: #000;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #F0C000;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2rem 1.5rem;
  background: #fff;
  color: #000;
`;

function FrontPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [signUpData, setSignUpData] = useState({ name: '', email: '' });
  const [contactData, setContactData] = useState({ name: '', email: '', message: '' });

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send signUpData to the server here
    alert(`Thank you for signing up, ${signUpData.name}!`);
    setSignUpData({ name: '', email: '' });
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactData(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send contactData to the server here
    alert('Thank you for contacting us! We will get back to you soon.');
    setContactData({ name: '', email: '', message: '' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.Tally) {
        window.Tally.loadEmbeds(); // Ensure Tally is available before calling it
      }
    };
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script); // Cleanup script when component unmounts
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header>
        <HeaderContent>
          <a href="#home">
            <Logo src={BrightSparksLogo} alt="Bright Sparks Academy Logo" />
          </a>
          <MenuToggle
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(prev => !prev)}
          >
            ☰
          </MenuToggle>
          <nav aria-label="Main Navigation">
            <NavLinks open={menuOpen}>
              <li><NavLink href="#about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
              <li><NavLink href="#contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
              <li><NavButton href="#signup" onClick={() => setMenuOpen(false)}>Sign Up</NavButton></li>
            </NavLinks>
          </nav>
        </HeaderContent>
      </Header>
      <Main>
        <HeroSection id="home">
          <Container>
            <HeroTitle>Empowering Students. Inspiring Teachers.</HeroTitle>
            <HeroSubtitle>
              Bright Sparks Academy connects students with dedicated teachers 
              to spark a love of learning.
            </HeroSubtitle>
            <HeroButton href="#signup">Get Started</HeroButton>
          </Container>
        </HeroSection>

        <Section id="about" className="reveal">
          <Container>
            <SectionTitle>About Bright Sparks Academy</SectionTitle>
            <SectionText>
              Bright Sparks Academy is a modern educational platform that bridges students 
              and teachers to foster a love of learning. Our mission is to make education 
              engaging, accessible, and tailored to individual needs.
            </SectionText>
            <TwoColumn>
              <Column>
                <ColumnTitle>For Students</ColumnTitle>
                <p>
                  Personalized one-on-one lessons, engaging content, and a flexible 
                  learning schedule help each student reach their full potential. 
                  Bright Sparks Academy makes learning fun and effective, catering 
                  to individual strengths and needs.
                </p>
              </Column>
              <Column>
                <ColumnTitle>For Teachers</ColumnTitle>
                <p>
                  Empowering educators with the freedom to design their own curriculum 
                  and a platform to connect with eager learners. Teachers enjoy flexible 
                  scheduling and the support of a passionate community dedicated to 
                  innovative teaching.
                </p>
              </Column>
            </TwoColumn>
          </Container>
        </Section>

        {/* <Section id="signup" className="reveal">
          <Container>
            <SectionTitle>Sign Up</SectionTitle>
            <SectionText>
              Join Bright Sparks Academy today. Fill in your details below to get started 
              on your personalized learning journey!
            </SectionText>
            <Form onSubmit={handleSignUpSubmit}>
              <FormGroup>
                <Label htmlFor="signup-name">Name</Label>
                <Input
                  id="signup-name"
                  name="name"
                  type="text"
                  value={signUpData.name}
                  onChange={handleSignUpChange}
                  required
                  placeholder="Your Name"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="signup-email">Email</Label>
                <Input
                  id="signup-email"
                  name="email"
                  type="email"
                  value={signUpData.email}
                  onChange={handleSignUpChange}
                  required
                  placeholder="Your Email"
                />
              </FormGroup>
              <FormButton type="submit">Sign Up</FormButton>
            </Form>
          </Container>
        </Section> */}

        <Section id="student-application">
        <Container>
          <SectionTitle>Student Application Form</SectionTitle>
          <iframe
            data-tally-src="https://tally.so/embed/mO4r8A?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="540"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Student Application Form"
          ></iframe>
        </Container>
      </Section>

        <Section id="contact" className="reveal">
          <Container>
            <SectionTitle>Contact Us</SectionTitle>
            <SectionText>
              Have any questions or just want to say hello? Send us a message and we’ll 
              get back to you as soon as possible.
            </SectionText>
            <ContactFormStyled onSubmit={handleContactSubmit}>
              <FormGroup>
                <Label htmlFor="contact-name">Name</Label>
                <Input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={contactData.name}
                  onChange={handleContactChange}
                  required
                  placeholder="Your Name"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="contact-email">Email</Label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={contactData.email}
                  onChange={handleContactChange}
                  required
                  placeholder="Your Email"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="contact-message">Message</Label>
                <TextArea
                  id="contact-message"
                  name="message"
                  rows="4"
                  value={contactData.message}
                  onChange={handleContactChange}
                  required
                  placeholder="Your Message"
                />
              </FormGroup>
              <FormButton type="submit">Send Message</FormButton>
            </ContactFormStyled>
          </Container>
        </Section>
      </Main>
      <Footer>
        <p>&copy; 2025 Bright Sparks Academy. All rights reserved.</p>
      </Footer>
    </>
  );
}

export default FrontPage;
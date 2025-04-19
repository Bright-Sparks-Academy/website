import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// FAQ Page — reduce friction, improve trust

const FAQ = () => {
  const [tab, setTab] = useState('parents');
  const [openIndex, setOpenIndex] = useState({ parents: null, volunteers: null, general: null });

  const faqs = {
    parents: [
      { q: 'Is Bright Sparks really free?', a: 'Yes! Bright Sparks Academy is 100% nonprofit. Our tutors are volunteers who want to make a difference. You’ll never be charged.' },
      { q: 'How do I sign my child up?', a: 'Simply go to the Join page, fill out the Tally.so form, and we’ll match your child with a tutor within a few days.' },
      { q: 'What subjects do you offer?', a: 'We offer Math, English, Science, Computer Science, Public Speaking, and more. View the full list on our Programs page.' },
      { q: 'How often are sessions held?', a: 'You choose! Weekly, biweekly, or flexible. We work around your family’s schedule.' },
      { q: 'Are the tutors trained?', a: 'Yes! All volunteers go through an onboarding process and receive guidance throughout their time with Bright Sparks.' },
    ],
    volunteers: [
      { q: 'Who can volunteer with Bright Sparks?', a: 'Anyone in high school, college, or beyond with a passion for helping others. We welcome tutors from all over the world.' },
      { q: 'What is the time commitment?', a: 'As little as 1 hour per week. You can choose your schedule and availability.' },
      { q: 'Do I need teaching experience?', a: 'Nope! We provide resources and onboarding. All we ask is that you’re committed, respectful, and enthusiastic.' },
      { q: 'Can I get volunteer hours or a certificate?', a: 'Yes! We track your hours and can provide a certificate or letter of recommendation upon request.' },
      { q: 'How do I apply?', a: 'Head over to the Volunteer Page and fill out the embedded Tally.so form to get started.' },
    ],
    general: [
      { q: 'Where is Bright Sparks based?', a: 'We’re based in Cupertino, CA—but we serve students and train volunteers globally.' },
      { q: 'How do I contact someone at Bright Sparks?', a: 'You can reach us anytime through our Contact Page or email us at hello@brightsparks.org.' },
      { q: 'What is Bright Sparks Connect?', a: 'Our very own video conferencing tool, designed just for tutoring. Learn more on the Connect page.' },
      { q: 'How was Bright Sparks started?', a: 'It was founded by students with a vision to make education accessible for all. Read our story on the Origin Page.' },
    ],
  };

  const toggleAccordion = (index) => {
    setOpenIndex(prev => ({
      ...prev,
      [tab]: prev[tab] === index ? null : index
    }));
  };

  return (
    <PageWrapper>
      {/* Hero / Intro Section */}
      <HeroSection>
        <Title>Frequently Asked Questions</Title>
        <Subtitle>We’ve got answers for students, families, and volunteers.</Subtitle>
      </HeroSection>

      {/* FAQ Filters / Tabs */}
      <TabContainer>
        <TabButton active={tab === 'parents'} onClick={() => setTab('parents')}>🏠 For Parents</TabButton>
        <TabButton active={tab === 'volunteers'} onClick={() => setTab('volunteers')}>🧑‍🏫 For Volunteers</TabButton>
        <TabButton active={tab === 'general'} onClick={() => setTab('general')}>🌍 General</TabButton>
      </TabContainer>

      {/* Accordion Section */}
      <AccordionSection>
        {faqs[tab].map((item, idx) => (
          <AccordionItem key={idx}>
            <Question onClick={() => toggleAccordion(idx)}>
              {item.q}
              <Arrow open={openIndex[tab] === idx}>›</Arrow>
            </Question>
            {openIndex[tab] === idx && <Answer>{item.a}</Answer>}
          </AccordionItem>
        ))}
      </AccordionSection>

      {/* Final CTA Section */}
      <CTASection>
        <CTATitle>Still Have Questions?</CTATitle>
        <CTAText>We’re here to help. Contact us anytime and we’ll get back to you within 24 hours.</CTAText>
        <CTAButtons>
          <CTAButton as={Link} to="/contact">Contact Us</CTAButton>
          <CTAButton as={Link} to="/join">Join Bright Sparks</CTAButton>
        </CTAButtons>
      </CTASection>

      {/* Footer */}
      <Footer />
    </PageWrapper>
  );
};

export default FAQ;

// Styled Components

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const PageWrapper = styled.div`
  font-family: 'Inter', sans-serif;
  color: #000;
  animation: ${fadeIn} 0.5s ease-in;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  background: #fffbea;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1rem;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  position: sticky;
  top: 0;
  background: #fff;
  padding: 1rem 0;
  z-index: 100;
  border-bottom: 1px solid #eee;
`;

const TabButton = styled.button`
  background: ${({ active }) => (active ? '#ffd900' : 'transparent')};
  color: #000;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background: rgba(255,217,0,0.3);
  }
`;

const AccordionSection = styled.section`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const AccordionItem = styled.div`
  border-bottom: 1px solid #eee;
  padding: 1rem 0;
`;

const Question = styled.div`
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Arrow = styled.span`
  display: inline-block;
  transform: rotate(${({ open }) => (open ? '90deg' : '0deg')});
  transition: transform 0.3s ease;
`;

const Answer = styled.p`
  margin-top: 0.5rem;
  line-height: 1.5;
`;

const CTASection = styled.section`
  text-align: center;
  padding: 4rem 2rem;
`;

const CTATitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const CTAText = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const CTAButton = styled(Link)`
  background: #000;
  color: #ffd900;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
`;

const Footer = styled.footer`
  padding: 2rem;
  text-align: center;
`;

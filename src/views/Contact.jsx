import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// Contact Page — Relationship Gateway

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could integrate Formspree, EmailJS, etc.
    setSubmitted(true);
  };

  return (
    <PageWrapper>
      {/* Hero / Title Section */}
      <HeroSection>
        <Title>Let’s Connect</Title>
        <Subtitle>
          Got questions? We’re here to help. Reach out and we’ll get back to you ASAP.
        </Subtitle>
        <MailLink href="mailto:reach@brightsparks.academy">
          You can also email us directly at reach@brightsparks.academy
        </MailLink>
      </HeroSection>

      {/* Contact Form */}
      <FormSection>
        <FormTitle>Send Us a Message</FormTitle>
        {submitted ? (
          <SuccessMessage>
            Thanks! We’ll be in touch shortly.
          </SuccessMessage>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Input type="text" name="name" placeholder="Full Name" required />
            <Input type="email" name="email" placeholder="Email Address" required />
            <Input type="text" name="subject" placeholder="Subject" required />
            <Textarea name="message" rows="5" placeholder="Message" required />
            <SubmitButton type="submit">Send Message</SubmitButton>
          </Form>
        )}
      </FormSection>

      {/* Direct Contact Details */}
      <DetailsSection>
        <SectionTitle>Or Reach Us Directly</SectionTitle>
        <DetailsList>
          <DetailsItem>📧 <a href="mailto:reach@brightsparks.academy">reach@brightsparks.academy</a></DetailsItem>
          <DetailsItem>📍 Cupertino, CA (Virtual)</DetailsItem>
          <DetailsItem>📲 <a href="https://www.instagram.com/brightsparks.academy/" target="_blank" rel="noopener noreferrer">Instagram</a></DetailsItem>
          <DetailsItem>🔗 <a href="https://linkedin.com/company/bright-sparks-project" target="_blank" rel="noopener noreferrer">LinkedIn</a></DetailsItem>
        </DetailsList>
      </DetailsSection>

      {/* FAQ Link */}
      <FAQSection>
        <SectionTitle>Looking for quick answers?</SectionTitle>
        <FAQText>
          Check out our <Link to="/faq">FAQ page</Link> to get instant answers to our most asked questions.
        </FAQText>
      </FAQSection>

      {/* Final Encouragement */}
      <FinalSection>
        <FinalText>
          Whether you’re a parent, student, teacher, or future partner — we’d love to hear from you.
        </FinalText>
      </FinalSection>

      {/* Footer placeholder */}
      <Footer />
    </PageWrapper>
  );
};

export default Contact;

// Styled Components

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageWrapper = styled.div`
  font-family: 'Inter', sans-serif;
  color: #000;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  background: #fffbea;
  animation: ${fadeInUp} 0.6s ease-out;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1rem;
`;

const MailLink = styled.a`
  color: #000;
  text-decoration: underline;
  font-size: 1rem;
`;

const FormSection = styled.section`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
`;

const FormTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 2px solid #000;
  border-radius: 0.75rem;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #ffd900;
    box-shadow: 0 0 0 3px rgba(255,217,0,0.3);
  }
`;

const Textarea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 2px solid #000;
  border-radius: 0.75rem;
  font-size: 1rem;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: #ffd900;
    box-shadow: 0 0 0 3px rgba(255,217,0,0.3);
  }
`;

const SubmitButton = styled.button`
  background: #000;
  color: #ffd900;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const SuccessMessage = styled.p`
  text-align: center;
  font-size: 1.125rem;
  color: #228B22;
`;

const DetailsSection = styled.section`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const DetailsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const DetailsItem = styled.li`
  font-size: 1rem;
  margin-bottom: 0.75rem;
  a {
    color: #000;
    text-decoration: underline;
  }
`;

const FAQSection = styled.section`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  text-align: center;
`;

const FAQText = styled.p`
  font-size: 1rem;
  a {
    color: #000;
    text-decoration: underline;
    font-weight: bold;
  }
`;

const FinalSection = styled.section`
  padding: 2rem;
  text-align: center;
`;

const FinalText = styled.p`
  font-size: 1.125rem;
`;

const Footer = styled.footer`
  padding: 2rem;
`;

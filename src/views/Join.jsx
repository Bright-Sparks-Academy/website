import React, { useState } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

const Join = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const toggleFAQ = (idx) => {
    setOpenFAQ(openFAQ === idx ? null : idx);
  };
  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroSection>
        <Headline>Join Today to Get More</Headline>
        <Subheadline>
          Be part of a personalized education revolution. We’re here to empower your child—completely free.
        </Subheadline>
        <HeroButtons>
          <PrimaryButton href="#enroll-form">Join Now</PrimaryButton>
          <SecondaryButton href="#how-it-works">Learn How It Works</SecondaryButton>
        </HeroButtons>
      </HeroSection>

      {/* How It Works Section */}
      <HowItWorks id="how-it-works">
        <SectionTitle>Here’s How You Can Get Started</SectionTitle>
        <Steps>
          <StepCard>
            <StepNumber>1</StepNumber>
            <StepTitle>Fill Out the Form</StepTitle>
            <StepDesc>Share your child’s grade, subjects, and availability.</StepDesc>
          </StepCard>
          <StepCard>
            <StepNumber>2</StepNumber>
            <StepTitle>Get Matched With a Tutor</StepTitle>
            <StepDesc>We carefully pair based on skills and fit.</StepDesc>
          </StepCard>
          <StepCard>
            <StepNumber>3</StepNumber>
            <StepTitle>Start Learning</StepTitle>
            <StepDesc>Sessions begin with regular updates to you.</StepDesc>
          </StepCard>
        </Steps>
        <NoteText>It only takes 2 minutes to join. No payments. No commitments.</NoteText>
      </HowItWorks>

      {/* Embedded Tally.so Form */}
      <FormSection id="enroll-form">
        <SectionTitle>Enroll in Under 2 Minutes</SectionTitle>
        <FormWrapper>
          <Iframe
            src="https://tally.so/embed/YOUR_FORM_ID?transparentBackground=1&hideTitle=1"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Bright Sparks Enrollment Form"
          />
        </FormWrapper>
        <SupportText>
          Having trouble or questions? Contact us at info@brightsparks.academy or (555) 123-4567 for support.
        </SupportText>
      </FormSection>

      {/* FAQs Section */}
      <FAQSection>
        <SectionTitle>Still Have Questions?</SectionTitle>
        {[
          { q: 'Is this really free?', a: 'Yes—our services are 100% free for all families.' },
          { q: 'How are tutors selected?', a: 'All tutors are vetted, trained, and background-checked.' },
          { q: 'Can I cancel or stop anytime?', a: 'Absolutely—no commitments or fees.' },
          { q: 'What if my child’s schedule changes?', a: 'You can update your availability at any time.' },
        ].map((item, idx) => (
          <AccordionItem key={idx}>
          <Question onClick={() => toggleFAQ(idx)}>{item.q}</Question>
          {openFAQ === idx && <Answer>{item.a}</Answer>}
          </AccordionItem>
        ))}
      </FAQSection>

      {/* Final CTA */}
      <FinalCTA>
        <FinalText>Ready to give your child the boost they deserve?</FinalText>
        <PrimaryButton href="#enroll-form">Start Now — It’s Free</PrimaryButton>
      </FinalCTA>
    </PageWrapper>
  );
};

export default Join;

// Styled Components

const PageWrapper = styled.div`
  font-family: 'Inter', sans-serif;
  color: #000;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  background: #fffbea;
`;

const Headline = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Subheadline = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
`;

const HeroButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.a`
  background: #000;
  color: #ffd900;
  padding: 12px 24px;
  border-radius: 9999px;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
`;

const SecondaryButton = styled.a`
  border: 2px solid #000;
  color: #000;
  padding: 12px 24px;
  border-radius: 9999px;
  text-decoration: none;
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

const HowItWorks = styled.section`
  padding: 4rem 2rem;
  background: #ffffff;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Steps = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
`;

const StepCard = styled.div`
  max-width: 250px;
  text-align: center;
`;

const StepNumber = styled.div`
  background: #ffd900;
  color: #000;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin: 0 auto 1rem;
`;

const StepTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const StepDesc = styled.p`
  font-size: 1rem;
`;

const NoteText = styled.p`
  margin-top: 1.5rem;
  font-style: italic;
`;

const FormSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: #f7f3e8;
`;

const FormWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: #fff;
  border-radius: 1rem;
  padding: 2rem;
`;

const Iframe = styled.iframe`
  width: 100%;
  border: none;
  border-radius: 0.5rem;
`;

const SupportText = styled.p`
  margin-top: 1rem;
  font-size: 0.875rem;
`;

const FAQSection = styled.section`
  padding: 4rem 2rem;
  background: #ffffff;
`;

const AccordionItem = styled.div`
  margin-bottom: 1rem;
`;

const Question = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
`;

const Answer = styled.p`
  font-size: 0.875rem;
  margin: 0.5rem 0 0 0;
`;

const FinalCTA = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: #fffbea;
`;

const FinalText = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

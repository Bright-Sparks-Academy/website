import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import heroImage from '../images/landing-hero.png'; // hero image for right side

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Landing = () => (
  <PageWrapper>
    {/* Hero Section */}
    <HeroSection>
      <Overlay />
      <HeroContent>
        {/* Trust Badges */}
        <TrustSection>
          <BadgeList>
            <BadgeItem>✅ Over 5,000 sessions completed</BadgeItem>
            <BadgeItem>⭐ Loved by 100+ families nationwide</BadgeItem>
          </BadgeList>
        </TrustSection>
        <Headline>Free. Personalized. Flexible Tutoring That Transforms Futures.</Headline>
        <Subheadline>
          Bright Sparks Academy offers free 1-on-1 tutoring tailored to every child’s needs—right from the comfort of your home.
        </Subheadline>
        <ButtonGroup>
          <PrimaryButton to="/join">Get Started Today</PrimaryButton>
          <SecondaryLink to="/origin">Learn More About Us</SecondaryLink>
        </ButtonGroup>
      </HeroContent>
      <HeroImage src={heroImage} alt="Tutoring illustration" />
    </HeroSection>

    {/* Impact & Mission */}
    <ImpactSection>
      <StatsGrid>
        {[
          { metric: '3+ Years of Free Tutoring' },
          { metric: '50+ Tutors Trained' },
          { metric: '20+ Current Students Served' },
          { metric: '100% Personalized Learning Paths' },
        ].map((item, i) => (
          <ImpactCard key={i} style={{ animationDelay: `${i * 0.2}s` }}>
            <Metric>{item.metric}</Metric>
          </ImpactCard>
        ))}
      </StatsGrid>
      <MissionStatement>
        We’re reimagining education by offering cutting-edge, customized tutoring to underserved children—free of charge, anytime, anywhere.
      </MissionStatement>
    </ImpactSection>

    {/* Testimonials */}
    <TestimonialsSection>
      <SectionTitle>Trusted by Families Across the Bay Area</SectionTitle>
      <TestimonialGrid>
        {[
          { name: 'Sarah K.', grade: '5th Grade Student', quote: 'Bright Sparks has transformed my daughter’s confidence in math!' },
          { name: 'Michael T.', grade: '8th Grade Student', quote: 'Tutors are professional and truly care about progress.' },
          { name: 'Emily R.', grade: '6th Grade Student', quote: 'Flexible scheduling made it so easy for our busy family.' },
        ].map((t, i) => (
          <TestimonialCard key={i}>
            <Quote>"{t.quote}"</Quote>
            <Author>{t.name} – {t.grade}</Author>
          </TestimonialCard>
        ))}
      </TestimonialGrid>
      <SubmitLink to="/contact">Submit Your Testimonial</SubmitLink>
    </TestimonialsSection>

    {/* How It Works */}
    <ProcessSection>
      <SectionTitle>How Bright Sparks Works</SectionTitle>
      <StepsWrapper>
        <Step>
          <StepNumber>1</StepNumber>
          <StepTitle>Sign Up & Tell Us Your Needs</StepTitle>
          <StepDesc>Fill out a brief form with student info, schedule, and preferences.</StepDesc>
        </Step>
        <Step>
          <StepNumber>2</StepNumber>
          <StepTitle>Get Matched with a Tutor</StepTitle>
          <StepDesc>Based on subject, style, and availability.</StepDesc>
        </Step>
        <Step>
          <StepNumber>3</StepNumber>
          <StepTitle>Start Learning & See Progress</StepTitle>
          <StepDesc>Weekly sessions, flexible hours, regular parent updates.</StepDesc>
        </Step>
      </StepsWrapper>
    </ProcessSection>

    {/* Final CTA */}
    <CTASection>
      <CTATitle>Ready to Spark Your Child’s Learning Journey?</CTATitle>
      <CTASubtext>Join dozens of families already experiencing the power of personalized education—100% free.</CTASubtext>
      <PrimaryButton to="/join">Enroll for Free</PrimaryButton>
    </CTASection>
  </PageWrapper>
);

export default Landing;

// Styled Components

const PageWrapper = styled.div`
  font-family: 'Inter', sans-serif;
  color: #000;
`;

const HeroSection = styled.section`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 3rem 0;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(255, 217, 0, 0.15);
`;

const HeroContent = styled.div`
  position: relative;
  max-width: 600px;
  margin-left: 5%;
  animation: ${fadeInUp} 0.6s ease-out;
`;

const Headline = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subheadline = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;

const PrimaryButton = styled(Link)`
  background: #000;
  color: #ffd900;
  padding: 12px 24px;
  border-radius: 9999px;
  font-weight: bold;
  text-decoration: none;
  margin-right: 16px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 8px rgba(255,217,0,0.6);
  }
`;

const SecondaryLink = styled(Link)`
  color: #000;
  text-decoration: underline;
  font-size: 1rem;
`;

const ImpactSection = styled.section`
  padding: 4rem 2rem;
  background: #fff;
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const ImpactCard = styled.div`
  text-align: center;
  margin: 1rem;
  animation: ${fadeInUp} 0.6s ease-out forwards;
`;

const Metric = styled.h3`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

// const Caption = styled.p`
//   font-size: 1rem;
// `;

const MissionStatement = styled.p`
  max-width: 800px;
  margin: 2rem auto 0;
  text-align: center;
  font-style: italic;
`;

const TestimonialsSection = styled.section`
  background: #f9f7f0;
  padding: 4rem 2rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const TestimonialGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TestimonialCard = styled.div`
  background: #fff;
  border-radius: 1rem;
  padding: 2rem;
  margin: 1rem;
  max-width: 300px;
`;

const Quote = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Author = styled.p`
  font-weight: bold;
  font-size: 0.9rem;
`;

const SubmitLink = styled(Link)`
  display: inline-block;
  margin-top: 1.5rem;
  text-decoration: underline;
  color: #000;
`;

const ProcessSection = styled.section`
  padding: 4rem 2rem;
`;

const StepsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Step = styled.div`
  max-width: 250px;
  text-align: center;
  margin: 1rem;
`;

const StepNumber = styled.div`
  background: #ffd900;
  color: #000;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:bold;
  margin: 0 auto 1rem;
`;

const StepTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const StepDesc = styled.p`
  font-size: 1rem;
`;

const CTASection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const CTASubtext = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const HeroImage = styled.img`
  max-width: 40%;
  border-radius: 1rem;
  object-fit: cover;
  margin-right: 3%;
  animation: ${fadeInUp} 0.8s ease-out forwards;
`;

// Trust badges
const TrustSection = styled.div`
  margin-top: 4rem;
  text-align: center;
`;

const BadgeList = styled.div`
  display: inline-flex;
  gap: 1rem;
  margin-left: -40px;
`;

const BadgeItem = styled.div`
  background: #fff;
  border: 1px solid #ffd900;
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
`;

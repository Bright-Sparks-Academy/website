import React from 'react';
import styled, { keyframes } from 'styled-components';
// import { Link } from 'react-router-dom';
// import heroImage from '../images/codara-hero.jpg'; // replace with actual path
// import codaraGraphic from '../images/codara-graphic.svg'; // replace with actual path

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ProjectCodara = () => (
  <PageWrapper>
    {/* Hero Section */}
    <HeroSection>
      <Overlay />
      <HeroContent>
        <Title>Introducing Project Codara – Bright Sparks for Coding</Title>
        <Subtitle>
          Free, personalized computer science tutoring built to spark a passion for programming—powered by Bright Sparks Academy.
        </Subtitle>
        <HeroButtons>
          <PrimaryButton href="#signup-form">Join Codara Today</PrimaryButton>
          <SecondaryButton href="#how-it-works">See How It Works</SecondaryButton>
        </HeroButtons>
      </HeroContent>
    </HeroSection>

    {/* What is Project Codara */}
    <AboutSection id="about-codara">
      <SectionTitle>What is Project Codara?</SectionTitle>
      <AboutContent>
        <TextColumn>
          <Paragraph>
            Project Codara is a partnership program under Bright Sparks Academy that delivers the exact same tutoring experience—1-on-1, virtual, flexible, and free—but entirely focused on programming and digital skills.
          </Paragraph>
          <BulletList>
            <li>Python</li>
            <li>Scratch</li>
            <li>Web Development</li>
            <li>Logical Thinking</li>
            <li>AI & Tech Concepts</li>
          </BulletList>
        </TextColumn>
        <ImageColumn>
          {/* <SupportImage src={codaraGraphic} alt="Project Codara graphic" /> */}
        </ImageColumn>
      </AboutContent>
    </AboutSection>

    {/* How It Works */}
    <HowItWorksSection id="how-it-works">
      <SectionTitle>How It Works</SectionTitle>
      <StepsWrapper>
        {[
          { step: '1', title: 'Sign Up with Your Child’s Info', desc: 'Complete a brief sign-up form.' },
          { step: '2', title: 'Get Matched with a Coding Tutor', desc: 'We pair you with an expert tutor.' },
          { step: '3', title: 'Begin Weekly Sessions Online', desc: 'Start learning and building projects.' },
        ].map((item, idx) => (
          <StepCard key={idx} style={{ animationDelay: `${idx * 0.2}s` }}>
            <StepNumber>{item.step}</StepNumber>
            <StepTitle>{item.title}</StepTitle>
            <StepDesc>{item.desc}</StepDesc>
          </StepCard>
        ))}
      </StepsWrapper>
    </HowItWorksSection>

    {/* Subjects & Curriculum */}
    <CurriculumSection>
      <SectionTitle>What Will Students Learn?</SectionTitle>
      <CurriculumGrid>
        {[
          { tier: 'Beginner (Ages 8–12)', topics: 'Scratch, Basic Logic, Sequencing, Intro to Python' },
          { tier: 'Intermediate (Ages 12–15)', topics: 'Python, HTML/CSS, Game Dev, Loops, Conditionals, Events' },
          { tier: 'Advanced (Ages 15–18)', topics: 'Web Dev (JS), APIs, GitHub Basics, Real-World Projects' },
        ].map((item, idx) => (
          <CurriculumCard key={idx} style={{ animationDelay: `${idx * 0.2}s` }}>
            <CurriculumTier>{item.tier}</CurriculumTier>
            <CurriculumTopics>{item.topics}</CurriculumTopics>
          </CurriculumCard>
        ))}
      </CurriculumGrid>
    </CurriculumSection>

    {/* Testimonials */}
    <TestimonialsSection>
      <SectionTitle>What Families Say</SectionTitle>
      <TestimonialGrid>
        {[
          { quote: 'My child built their first game in Python within a month!', author: 'Priya S., Parent' },
          { quote: 'Codara tutors are knowledgeable and make coding fun.', author: 'Alex M., Student' },
        ].map((t, idx) => (
          <TestimonialCard key={idx} style={{ animationDelay: `${idx * 0.2}s` }}>
            <Quote>“{t.quote}”</Quote>
            <Author>{t.author}</Author>
          </TestimonialCard>
        ))}
      </TestimonialGrid>
    </TestimonialsSection>

    {/* Signup Form */}
    <FormSection id="signup-form">
      <SectionTitle>Ready to Join Project Codara?</SectionTitle>
      <FormWrapper>
        <Iframe
          src="https://tally.so/embed/YOUR_CODARA_FORM_ID?transparentBackground=1&hideTitle=1"
          width="100%"
          height="700"
          frameBorder="0"
          title="Project Codara Signup Form"
        />
      </FormWrapper>
      <SupportText>
        Need help or want to ask questions first? Email us at info@brightsparks.academy.
      </SupportText>
      <FallbackLink href="https://tally.so/r/YOUR_CODARA_FORM_ID" target="_blank">
        If you can’t see the form, click here to open it in a new tab →
      </FallbackLink>
    </FormSection>

    {/* Final CTA */}
    <FinalCTA>
      <FinalText>The next generation of coders starts here.</FinalText>
      <PrimaryButton href="#signup-form">Join Codara Now</PrimaryButton>
      <SecondaryButton href="/internships">Become a Coding Tutor</SecondaryButton>
    </FinalCTA>

    {/* Footer placeholder */}
    <Footer />
  </PageWrapper>
);

export default ProjectCodara;

// Styled Components

const PageWrapper = styled.div`
  font-family: 'Inter', sans-serif;
  color: #000;
`;

const HeroSection = styled.section`
  position: relative;
  background-size: cover;
  background-position: center;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(255, 217, 0, 0.15);
`;

const HeroContent = styled.div`
  position: relative;
  text-align: center;
  max-width: 800px;
  animation: ${fadeInUp} 0.6s ease-out;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
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
    background: rgba(0,0,0,0.05);
  }
`;

const AboutSection = styled.section`
  padding: 4rem 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const AboutContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
`;

const TextColumn = styled.div`
  flex: 1;
  min-width: 280px;
`;

const Paragraph = styled.p`
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const BulletList = styled.ul`
  list-style: disc inside;
`;

const ImageColumn = styled.div`
  flex: 1;
  text-align: center;
`;

// const SupportImage = styled.img`
//   max-width: 100%;
//   border-radius: 1rem;
// `;

const HowItWorksSection = styled.section`
  background: #f7f3e8;
  padding: 4rem 2rem;
`;

const StepsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const StepCard = styled.div`
  background: #fff;
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  max-width: 240px;
  animation: ${fadeInUp} 0.6s ease-out forwards;
`;

const StepNumber = styled.div`
  background: #ffd900;
  color: #000;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin: 0 auto 0.5rem;
`;

const StepTitle = styled.h3`
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
`;

const StepDesc = styled.p`
  font-size: 0.9rem;
`;

const CurriculumSection = styled.section`
  padding: 4rem 2rem;
`;

const CurriculumGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
`;

const CurriculumCard = styled.div`
  background: #fffbea;
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  animation: ${fadeInUp} 0.6s ease-out forwards;
`;

const CurriculumTier = styled.h3`
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
`;

const CurriculumTopics = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
`;

const TestimonialsSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const TestimonialCard = styled.div`
  background: #fff;
  border-radius: 1rem;
  padding: 1.5rem;
  animation: ${fadeInUp} 0.6s ease-out forwards;
`;

const Quote = styled.p`
  font-style: italic;
  margin-bottom: 0.5rem;
`;

const Author = styled.p`
  font-weight: bold;
`;

const FormSection = styled.section`
  background: #ffffff;
  padding: 4rem 2rem;
  text-align: center;
`;

const FormWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 700px;
  border: none;
  border-radius: 0.75rem;
`;

const SupportText = styled.p`
  margin-top: 1rem;
  font-size: 0.875rem;
`;

const FallbackLink = styled.a`
  display: block;
  margin-top: 0.5rem;
  color: #000;
  text-decoration: underline;
`;

const FinalCTA = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const FinalText = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const Footer = styled.footer`
  /* footer placeholder */
  padding: 2rem;
`;

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
// import heroImage from '../images/connect-hero.jpg'; // replace with actual path
// import feature1 from '../images/feature-video.svg';
// import feature2 from '../images/feature-schedule.svg';
// import feature3 from '../images/feature-whiteboard.svg';
// import feature4 from '../images/feature-security.svg';
// import feature5 from '../images/feature-browser.svg';
// import feature6 from '../images/feature-branding.svg';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Connect = () => (
  <PageWrapper>
    {/* Hero Section */}
    <HeroSection>
      <Overlay />
      <HeroContent>
        <Title>Introducing Bright Sparks Connect</Title>
        <Subtitle>
          A safe, smart, and beautifully simple video platform built just for our students, tutors, and families.
        </Subtitle>
        <HeroButtons>
          <PrimaryButton href="#features">See the Platform</PrimaryButton>
          <SecondaryButton href="https://app.brightsparks.connect" target="_blank">
            Join a Session
          </SecondaryButton>
        </HeroButtons>
      </HeroContent>
    </HeroSection>

    {/* What is Section */}
    <AboutSection>
      <SectionTitle>What is Bright Sparks Connect?</SectionTitle>
      <AboutContent>
        <TextColumn>
          <Paragraph>
            We built Bright Sparks Connect because generic tools weren’t built for education. Our platform is secure, distraction-free, and designed specifically for 1-on-1 tutoring.
          </Paragraph>
          <BulletList>
            <li>Designed for Learning – Minimal distractions, smooth whiteboard, simple UI</li>
            <li>Safe & Private – Encrypted, no recordings, no ads, no unknown users</li>
            <li>Built-In Scheduling – Tutors and students connect seamlessly with auto-reminders</li>
          </BulletList>
        </TextColumn>
        <MockupColumn>
          {/* <Mockup src={feature3} alt="Connect mockup" /> */}
        </MockupColumn>
      </AboutContent>
    </AboutSection>

    {/* Feature Grid */}
    <FeaturesSection id="features">
      <SectionTitle>What Makes It Unique</SectionTitle>
      {/* <FeaturesGrid>
        {[
          { icon: feature1, title: '1-on-1 Video Calls', desc: 'Crystal clear audio and video' },
          { icon: feature2, title: 'Smart Scheduling', desc: 'Sessions auto-sync with Google Calendar' },
          { icon: feature3, title: 'Collaborative Whiteboard', desc: 'Draw, type, and solve together' },
          { icon: feature4, title: 'Kid-Safe & Private', desc: 'End-to-end encryption, locked rooms' },
          { icon: feature5, title: 'No Downloads', desc: 'Fully browser-based and mobile-friendly' },
          { icon: feature6, title: 'Custom Branding', desc: 'Our yellow-and-black aesthetic' },
        ].map((item, idx) => (
          <FeatureCard key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
            <FeatureIcon src={item.icon} alt={item.title} />
            <FeatureTitle>{item.title}</FeatureTitle>
            <FeatureDesc>{item.desc}</FeatureDesc>
          </FeatureCard>
        ))}
      </FeaturesGrid> */}
    </FeaturesSection>

    {/* How It Works */}
    <HowSection>
      <SectionTitle>How It Works</SectionTitle>
      <HowGrid>
        {[
          { title: 'Parents', desc: 'Schedule sessions, receive reminders, and track progress.' },
          { title: 'Students', desc: 'Just click “Join” and start learning—no downloads needed.' },
          { title: 'Tutors', desc: 'Your schedule, materials, and tools all in one place.' },
        ].map((item, idx) => (
          <HowCard key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
            <HowTitle>{item.title}</HowTitle>
            <HowDesc>{item.desc}</HowDesc>
            <HowLink to={item.title === 'Parents' ? '/join' : item.title === 'Students' ? '/join' : '/internships'}>
              Join Today
            </HowLink>
          </HowCard>
        ))}
      </HowGrid>
    </HowSection>

    {/* Final CTA */}
    <FinalSection>
      <FinalText>A smarter way to learn—built by Bright Sparks.</FinalText>
      <FinalButtons>
        <PrimaryButton href="https://app.brightsparks.connect" target="_blank">Try Bright Sparks Connect</PrimaryButton>
        <SecondaryButton as={Link} to="/join">Join Our Programs</SecondaryButton>
      </FinalButtons>
    </FinalSection>

    {/* Footer placeholder */}
    <Footer />
  </PageWrapper>
);

export default Connect;

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
`;

const PrimaryButton = styled.a`
  background: #000;
  color: #ffd900;
  padding: 12px 24px;
  border-radius: 9999px;
  font-weight: bold;
  text-decoration: none;
  &:hover { opacity: 0.8; }
`;

const SecondaryButton = styled.a`
  border: 2px solid #000;
  color: #000;
  padding: 12px 24px;
  border-radius: 9999px;
  text-decoration: none;
  background: transparent;
  &:hover { background: rgba(0,0,0,0.05); }
`;

const AboutSection = styled.section`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
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
  max-width: 600px;
  margin-right: 2rem;
`;

const Paragraph = styled.p`
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li {
    background: #fffbea;
    border: 2px solid #ffd900;
    border-radius: 0.75rem;
    padding: 1rem;
    line-height: 1.5;
    font-size: 1rem;
  }
`;

const MockupColumn = styled.div`
  flex: 1;
  text-align: center;
`;

// const Mockup = styled.img`
//   max-width: 100%;
//   border-radius: 1rem;
//   animation: ${fadeInUp} 0.6s ease-out forwards;
// `;

const FeaturesSection = styled.section`
  padding: 4rem 2rem;
  background: #f9f7f0;
`;

// const FeaturesGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(160px,1fr));
//   gap: 1.5rem;
// `;

// const FeatureCard = styled.div`
//   background: #fff;
//   border-radius: 1rem;
//   padding: 1.5rem;
//   text-align: center;
//   animation: ${fadeInUp} 0.6s ease-out forwards;
//   transition: transform 0.2s;
//   &:hover { transform: translateY(-4px); }
// `;

// const FeatureIcon = styled.img`
//   height: 40px;
//   margin-bottom: 0.75rem;
// `;

// const FeatureTitle = styled.h4`
//   font-size: 1rem;
//   margin-bottom: 0.5rem;
// `;

// const FeatureDesc = styled.p`
//   font-size: 0.875rem;
// `;

const HowSection = styled.section`
  padding: 4rem 2rem;
`;

const HowGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const HowCard = styled.div`
  background: #fffbea;
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  max-width: 220px;
  animation: ${fadeInUp} 0.6s ease-out forwards;
`;

const HowTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const HowDesc = styled.p`
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;

const HowLink = styled(Link)`
  font-size: 0.875rem;
  color: #000;
  text-decoration: underline;
`;

const FinalSection = styled.section`
  text-align: center;
  padding: 4rem 2rem;
`;

const FinalText = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const FinalButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const Footer = styled.footer`
  padding: 2rem;
`;

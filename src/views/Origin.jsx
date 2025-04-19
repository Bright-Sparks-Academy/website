import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
// import heroImage from '../images/origin-hero.jpg';         // replace with actual path
// import founderImage from '../images/founder.jpg';         // replace with actual path
// import mapImage from '../images/world-map.svg';           // optional
// import iconTutoring from '../images/icon-tutoring.svg';
// import iconWorkshops from '../images/icon-workshops.svg';
// import iconDonations from '../images/icon-donations.svg';
// import iconLeadership from '../images/icon-leadership.svg';
// import iconTech from '../images/icon-tech.svg';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Origin = () => (
  <PageWrapper>
    {/* Hero / Banner Section */}
    <HeroSection>
      <Overlay />
      <HeroContent>
        <HeroTitle>Our Story, Our Mission</HeroTitle>
        <HeroSubtitle>
          We’re not just teaching—we’re reimagining what education can be.
        </HeroSubtitle>
        <MeetButton as={Link} to="#leadership">Meet the Team</MeetButton>
      </HeroContent>
    </HeroSection>

    {/* Our Origin Story */}
    <StorySection>
      <SectionTitle>Our Origin Story</SectionTitle>
      <StoryContent>
        <StoryText>
          <Paragraph>
            <strong>Bright Sparks Academy</strong> was founded on a simple belief: education should be personal, accessible, and free. Born during a time when so many students were falling behind, we knew something had to change. So we built it.
          </Paragraph>
          <Paragraph>
            What started as a few tutors helping a handful of students has now become a global network of volunteers empowering learners around the world.
          </Paragraph>
          <Paragraph>
            Founded by <strong>Nimai Garg</strong>, a student driven by purpose.
          </Paragraph>
        </StoryText>
        {/* <StoryImage src={founderImage} alt="Founder Nimai Garg" /> */}
      </StoryContent>
    </StorySection>

    {/* What We Do */}
    <WhatSection>
      <SectionTitle>What We Do</SectionTitle>
      {/* <WhatGrid>
        {[
          { icon: iconTutoring, title: 'Free 1-on-1 Tutoring', desc: 'Personalized sessions for every student.' },
          { icon: iconWorkshops, title: 'Workshops & Group Learning', desc: 'Interactive topic-based group events.' },
          { icon: iconDonations, title: 'Global Resource Donations', desc: 'Books, tech, and supplies worldwide.' },
          { icon: iconLeadership, title: 'Student Empowerment', desc: 'Leadership & mentorship programs.' },
          { icon: iconTech, title: 'Tech-Enabled Learning', desc: 'Bright Sparks Connect & Project Codara.' },
        ].map((item, idx) => (
          <WhatCard key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
            <WhatIcon src={item.icon} alt={item.title} />
            <WhatTitle>{item.title}</WhatTitle>
            <WhatDesc>{item.desc}</WhatDesc>
          </WhatCard>
        ))}
      </WhatGrid> */}
      <ProgramsLink as={Link} to="/programs">See Our Programs →</ProgramsLink>
    </WhatSection>

    {/* Who This Is For */}
    <AudienceSection>
      <SectionTitle>Who This Is For</SectionTitle>
      <AudienceGrid>
        <AudienceCard>
          <AudienceIcon>📚</AudienceIcon>
          <AudienceTitle>Students & Families</AudienceTitle>
          <AudienceDesc>K–12 students who want personalized help, flexible scheduling, and a supportive tutor.</AudienceDesc>
        </AudienceCard>
        <AudienceCard>
          <AudienceIcon>👩‍🏫</AudienceIcon>
          <AudienceTitle>Interns & Volunteers</AudienceTitle>
          <AudienceDesc>High schoolers, college students, and mentors looking to make an impact and grow their skills.</AudienceDesc>
        </AudienceCard>
      </AudienceGrid>
    </AudienceSection>

    {/* Meet Our Leadership */}
    <LeaderSection id="leadership">
      <SectionTitle>Meet the Team</SectionTitle>
      {/* <LeaderGrid>
        {[
          { name: 'Nimai Garg', role: 'Founder & Executive Director', img: founderImage },
          // add more team members here
        ].map((member, idx) => (
          <LeaderCard key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
            <LeaderImage src={member.img} alt={member.name} />
            <LeaderName>{member.name}</LeaderName>
            <LeaderRole>{member.role}</LeaderRole>
          </LeaderCard>
        ))}
      </LeaderGrid> */}
    </LeaderSection>

    {/* Where We’re Located */}
    <LocationSection>
      <SectionTitle>Where We’re Located</SectionTitle>
      {/* <MapImage src={mapImage} alt="Global map of Bright Sparks locations" /> */}
      <StatGrid>
        {[
          { stat: 'Interns in 10+ cities', icon: '🌎' },
          { stat: 'Students in 4 countries', icon: '📚' },
          { stat: 'Volunteers from 25+ schools', icon: '🧑‍🏫' },
          { stat: 'Programs running year-round', icon: '🧠' },
        ].map((item, idx) => (
          <StatCard key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
            <StatIcon>{item.icon}</StatIcon>
            <StatText>{item.stat}</StatText>
          </StatCard>
        ))}
      </StatGrid>
    </LocationSection>

    {/* Core Values */}
    <ValuesSection>
      <SectionTitle>What We Stand For</SectionTitle>
      <ValuesGrid>
        {[
          { title: 'Equity', desc: 'Every child deserves a chance.' },
          { title: 'Empowerment', desc: 'We teach confidence, not just content.' },
          { title: 'Access', desc: 'No barriers. Ever.' },
          { title: 'Flexibility', desc: 'Life happens. We adapt.' },
          { title: 'Community', desc: 'We’re stronger together.' },
        ].map((item, idx) => (
          <ValueCard key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
            <ValueTitle>{item.title}</ValueTitle>
            <ValueDesc>{item.desc}</ValueDesc>
          </ValueCard>
        ))}
      </ValuesGrid>
    </ValuesSection>

    {/* Final CTA */}
    <CTASection>
      <SectionTitle>Be Part of Our Story</SectionTitle>
      <CTAText>
        Whether you’re a student, a parent, or someone who wants to make a difference—we want to hear from you.
      </CTAText>
      <CTAButtons>
        <CTAButton as={Link} to="/join">Join as a Student</CTAButton>
        <CTAButton as={Link} to="/internships">Volunteer with Us</CTAButton>
        <CTAButton as={Link} to="/donate">Support Our Mission</CTAButton>
      </CTAButtons>
    </CTASection>

  </PageWrapper>
);

export default Origin;

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
  background: rgba(255,217,0,0.15);
`;

const HeroContent = styled.div`
  position: relative;
  text-align: center;
  max-width: 800px;
  animation: ${fadeInUp} 0.6s ease-out;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
`;

const MeetButton = styled(Link)`
  background: #000;
  color: #ffd900;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: bold;
  text-decoration: none;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin: 2rem 0 1rem;
`;

const StorySection = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const StoryContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
`;

const StoryText = styled.div`
  flex: 1;
  min-width: 280px;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
`;

// const StoryImage = styled.img`
//   flex: 1;
//   max-width: 300px;
//   border-radius: 1rem;
// `;

const WhatSection = styled.section`
  padding: 4rem 2rem;
  background: #fffbea;
`;

// const WhatGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(180px,1fr));
//   gap: 1.5rem;
//   margin-bottom: 1.5rem;
// `;

// const WhatCard = styled.div`
//   background: #fff;
//   border-radius: 1rem;
//   padding: 1.5rem;
//   text-align: center;
//   animation: ${fadeInUp} 0.6s ease-out forwards;
// `;

// const WhatIcon = styled.img`
//   height: 40px;
//   margin-bottom: 0.75rem;
// `;

// const WhatTitle = styled.h3`
//   font-size: 1rem;
//   margin-bottom: 0.5rem;
// `;

// const WhatDesc = styled.p`
//   font-size: 0.875rem;
// `;

const ProgramsLink = styled(Link)`
  display: block;
  text-align: center;
  font-weight: bold;
  color: #000;
  text-decoration: none;
`;

const AudienceSection = styled.section`
  padding: 4rem 2rem;
`;

const AudienceGrid = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const AudienceCard = styled.div`
  background: #f9f7f0;
  border-radius: 1rem;
  padding: 1.5rem;
  flex: 1;
  min-width: 260px;
  text-align: center;
`;

const AudienceIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const AudienceTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const AudienceDesc = styled.p`
  font-size: 0.875rem;
`;

const LeaderSection = styled.section`
  padding: 4rem 2rem;
  background: #fffbea;
`;

// const LeaderGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(160px,1fr));
//   gap: 1.5rem;
//   align-items: start;
// `;

// const LeaderCard = styled.div`
//   background: #fff;
//   border-radius: 1rem;
//   padding: 1rem;
//   text-align: center;
//   animation: ${fadeInUp} 0.6s ease-out forwards;
// `;

// const LeaderImage = styled.img`
//   width: 100%;
//   border-radius: 50%;
//   margin-bottom: 0.75rem;
// `;

// const LeaderName = styled.h4`
//   font-size: 1rem;
//   margin-bottom: 0.25rem;
// `;

// const LeaderRole = styled.p`
//   font-size: 0.875rem;
//   color: #555;
// `;

const LocationSection = styled.section`
  padding: 4rem 2rem;
`;

// const MapImage = styled.img`
//   max-width: 100%;
//   border-radius: 1rem;
//   margin-bottom: 2rem;
// `;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px,1fr));
  gap: 1rem;
`;

const StatCard = styled.div`
  background: #fffbea;
  border-radius: 1rem;
  padding: 1rem;
  text-align: center;
  animation: ${fadeInUp} 0.6s ease-out forwards;
`;

const StatIcon = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const StatText = styled.p`
  font-size: 0.875rem;
`;

const ValuesSection = styled.section`
  padding: 4rem 2rem;
  background: #f9f7f0;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(140px,1fr));
  gap: 1rem;
`;

const ValueCard = styled.div`
  background: #fff;
  border-radius: 1rem;
  padding: 1rem;
  text-align: center;
  animation: ${fadeInUp} 0.6s ease-out forwards;
`;

const ValueTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const ValueDesc = styled.p`
  font-size: 0.875rem;
`;

const CTASection = styled.section`
  padding: 4rem 2rem;
`;
const CTAText = styled.p`
  font-size: 1.125rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
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

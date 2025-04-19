import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
// import images or icons as needed
// import subjectMath from '../images/subject-math.svg';
// import subjectEnglish from '../images/subject-english.svg';
// import subjectCS from '../images/subject-cs.svg';
// import subjectScience from '../images/subject-science.svg';
// import subjectStudy from '../images/subject-study.svg';
// import subjectSpeaking from '../images/subject-speaking.svg';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Programs = () => (
  <PageWrapper>
    {/* Hero Section */}
    <HeroSection>
      <Title>What We Offer at Bright Sparks</Title>
      <Subtitle>
        Every child learns differently. That’s why our programs are 100% personalized, always flexible, and completely free.
      </Subtitle>
      <HeroButtons>
        <PrimaryButton to="/join">Join Today</PrimaryButton>
        <SecondaryButton to="#teaching-style">See How It Works</SecondaryButton>
      </HeroButtons>
    </HeroSection>

    {/* Subjects We Teach */}
    <SubjectsSection>
      <SectionTitle>Subjects We Offer</SectionTitle>
      {/* <SubjectsGrid>
        {[
          { icon: subjectMath, title: 'Math', desc: 'Arithmetic, Algebra, Geometry, more' },
          { icon: subjectEnglish, title: 'English', desc: 'Reading comprehension, writing, grammar' },
          { icon: subjectCS, title: 'Computer Science', desc: 'Scratch, Python, coding logic' },
          { icon: subjectScience, title: 'Science', desc: 'General science, biology, middle school STEM' },
          { icon: subjectStudy, title: 'Study Skills', desc: 'Organization, time management, test prep' },
          { icon: subjectSpeaking, title: 'Public Speaking', desc: 'Confidence-building and presentation training' },
        ].map((item, idx) => (
          <SubjectCard key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
            <SubjectIcon src={item.icon} alt={item.title} />
            <SubjectTitle>{item.title}</SubjectTitle>
            <SubjectDesc>{item.desc}</SubjectDesc>
          </SubjectCard>
        ))}
      </SubjectsGrid> */}
    </SubjectsSection>

    {/* Age Levels & Customization */}
    <LevelsSection>
      <SectionTitle>Customized by Grade, Skill Level, and Goals</SectionTitle>
      <LevelsGrid>
        <LevelCard style={{ animationDelay: '0.1s' }}>
          <LevelIcon>🎒</LevelIcon>
          <LevelTitle>Elementary (K–5)</LevelTitle>
          <LevelList>
            <li>Foundational math</li>
            <li>Phonics</li>
            <li>Creative writing</li>
            <li>Basic logic games</li>
          </LevelList>
        </LevelCard>
        <LevelCard style={{ animationDelay: '0.2s' }}>
          <LevelIcon>🧭</LevelIcon>
          <LevelTitle>Middle School (6–8)</LevelTitle>
          <LevelList>
            <li>Pre-algebra</li>
            <li>Literature</li>
            <li>Intro coding</li>
            <li>Science projects</li>
            <li>Essay writing</li>
          </LevelList>
        </LevelCard>
        <LevelCard style={{ animationDelay: '0.3s' }}>
          <LevelIcon>🎓</LevelIcon>
          <LevelTitle>High School (9–12)</LevelTitle>
          <LevelList>
            <li>Algebra & Geometry</li>
            <li>Advanced writing</li>
            <li>SAT/ACT prep</li>
            <li>Leadership skills</li>
          </LevelList>
        </LevelCard>
      </LevelsGrid>
    </LevelsSection>

    {/* Teaching Style */}
    <StyleSection id="teaching-style">
      <SectionTitle>How We Teach</SectionTitle>
      <StyleGrid>
        {[
          { icon: '💡', title: 'Personalized Plans', desc: 'Every student starts with a learning needs survey' },
          { icon: '🤝', title: '1-on-1 Tutors', desc: 'Matched based on subject, schedule, personality' },
          { icon: '⏰', title: 'Flexible Sessions', desc: 'Weekdays, weekends, short or long-term' },
          { icon: '📈', title: 'Progress Monitoring', desc: 'Regular updates on student performance' },
          { icon: '🧠', title: 'Growth-Focused', desc: 'Emphasis on mindset, confidence, and curiosity' },
        ].map((item, idx) => (
          <StyleCard key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
            <StyleIcon>{item.icon}</StyleIcon>
            <StyleTitle>{item.title}</StyleTitle>
            <StyleDesc>{item.desc}</StyleDesc>
          </StyleCard>
        ))}
      </StyleGrid>
    </StyleSection>

    {/* Value Proposition */}
    <ValueSection>
      <SectionTitle>Why Parents Choose Bright Sparks</SectionTitle>
      <ValueGrid>
        {[
          { icon: '💸', title: 'Always Free', desc: 'No hidden costs or subscription fees' },
          { icon: '👨‍👩‍👧', title: 'Family-First Scheduling', desc: 'Sessions that work for your life' },
          { icon: '🧑‍🏫', title: 'Volunteer-Powered', desc: 'Passionate, trained tutors who care' },
          { icon: '📊', title: 'Real Growth', desc: 'Confidence and skills, not just homework help' },
        ].map((item, idx) => (
          <ValueCard key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
            <ValueIcon>{item.icon}</ValueIcon>
            <ValueTitle>{item.title}</ValueTitle>
            <ValueDesc>{item.desc}</ValueDesc>
          </ValueCard>
        ))}
      </ValueGrid>
    </ValueSection>

    {/* Final CTA */}
    <FinalSection>
      <FinalText>Ready to find the perfect learning match for your child?</FinalText>
      <FinalButtons>
        <PrimaryButton to="/join">Join Bright Sparks Today</PrimaryButton>
        <SecondaryButton to="/contact">Have Questions?</SecondaryButton>
      </FinalButtons>
    </FinalSection>

    {/* Footer placeholder */}
    <Footer />
  </PageWrapper>
);

export default Programs;

// Styled Components

const PageWrapper = styled.div`
  font-family: 'Inter', sans-serif;
  color: #000;
`;

const HeroSection = styled.section`
  background: #fffbea;
  text-align: center;
  padding: 4rem 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(Link)`
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

const SubjectsSection = styled.section`
  padding: 4rem 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

// const SubjectsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
//   gap: 2rem;
// `;

// const SubjectCard = styled.div`
//   background: #fff;
//   border-radius: 1rem;
//   padding: 2rem;
//   text-align: center;
//   animation: ${fadeInUp} 0.6s ease-out forwards;
//   transition: box-shadow 0.3s;
//   &:hover {
//     box-shadow: 0 4px 6px rgba(0,0,0,0.1);
//   }
// `;

// const SubjectIcon = styled.img`
//   height: 40px;
//   margin-bottom: 1rem;
// `;

// const SubjectTitle = styled.h3`
//   font-size: 1.125rem;
//   margin-bottom: 0.5rem;
// `;

// const SubjectDesc = styled.p`
//   font-size: 0.9rem;
// `;

const LevelsSection = styled.section`
  background: #f7f3e8;
  padding: 4rem 2rem;
`;

const LevelsGrid = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  flex-wrap: wrap;
`;

const LevelCard = styled.div`
  background: #fff;
  border-radius: 1rem;
  padding: 2rem;
  max-width: 240px;
  text-align: center;
  animation: ${fadeInUp} 0.6s ease-out forwards;
`;

const LevelIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const LevelTitle = styled.h4`
  font-size: 1.125rem;
  margin-bottom: 1rem;
`;

const LevelList = styled.ul`
  list-style: disc inside;
  text-align: left;
`;

const StyleSection = styled.section`
  padding: 4rem 2rem;
`;

const StyleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
  gap: 2rem;
`;

const StyleCard = styled.div`
  background: #fff;
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  animation: ${fadeInUp} 0.6s ease-out forwards;
`;

const StyleIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const StyleTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const StyleDesc = styled.p`
  font-size: 0.9rem;
`;

const ValueSection = styled.section`
  background: #fffbea;
  padding: 4rem 2rem;
`;

const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  gap: 2rem;
`;

const ValueCard = styled.div`
  background: #fff;
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  animation: ${fadeInUp} 0.6s ease-out forwards;
`;

const ValueIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ValueTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const ValueDesc = styled.p`
  font-size: 0.9rem;
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
  flex-wrap: wrap;
`;

const Footer = styled.footer`
  padding: 2rem;
`;

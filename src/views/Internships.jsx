import React from 'react';
import styled, { keyframes } from 'styled-components';
// import { Link } from 'react-router-dom';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Internships = () => (
  <PageWrapper>
    {/* Hero Section */}
    <HeroSection>
      <HeroContent>
        <Headline>Make a Difference. Grow Your Skills. Join Our Team.</Headline>
        <Subheadline>
          Whether you’re a student, educator, or aspiring leader, Bright Sparks offers real impact, real growth, and real connection—all while empowering the next generation.
        </Subheadline>
        <ButtonGroup>
          <PrimaryButton href="#apply-form">Apply to Volunteer</PrimaryButton>
          <SecondaryButton href="#why-join">Why Volunteer With Us</SecondaryButton>
        </ButtonGroup>
      </HeroContent>
    </HeroSection>

    {/* Value Props Section */}
    <ValuePropsSection id="why-join">
      <SectionTitle>Why Volunteer or Intern With Bright Sparks?</SectionTitle>
      <PropsGrid>
        {[
          {
            title: 'Make a Real Impact',
            desc: 'Help young students learn and grow—your time changes lives.',
          },
          {
            title: 'Flexible Commitment',
            desc: 'Choose your own schedule. We work around you.',
          },
          {
            title: 'Build Resume & Skills',
            desc: 'Stand out on college apps with leadership, communication, and teaching skills.',
          },
          {
            title: 'Leadership Pathways',
            desc: 'Grow within our nonprofit. Lead workshops, mentor others, or manage chapters.',
          },
        ].map((item, idx) => (
          <PropCard key={idx} style={{ animationDelay: `${idx * 0.2}s` }}>
            <PropIcon>★</PropIcon>
            <PropTitle>{item.title}</PropTitle>
            <PropDesc>{item.desc}</PropDesc>
          </PropCard>
        ))}
      </PropsGrid>
    </ValuePropsSection>

    {/* Roles Section */}
    <RolesSection>
      <SectionTitle>Explore Opportunities</SectionTitle>
      <RolesGrid>
        {[
          { role: 'Tutor', desc: '1-on-1 sessions in Math, English, CS, or Science', time: '2–4 hrs/week' },
          { role: 'Workshop Leader', desc: 'Host group lessons or topic-specific sessions', time: '3–5 hrs/week' },
          { role: 'Operations Intern', desc: 'Support backend processes, outreach, or event planning', time: '2–3 hrs/week' },
          { role: 'Marketing & Content Intern', desc: 'Create posts, write blogs, or promote campaigns', time: '2–4 hrs/week' },
        ].map((item, idx) => (
          <RoleCard key={idx}>
            <RoleTitle>{item.role}</RoleTitle>
            <RoleDesc>{item.desc}</RoleDesc>
            <RoleTime>{item.time}</RoleTime>
          </RoleCard>
        ))}
      </RolesGrid>
    </RolesSection>

    {/* Application Form Section */}
    <FormSection id="apply-form">
      <SectionTitle>Apply Now</SectionTitle>
      <FormWrapper>
        <Iframe
          src="https://tally.so/embed/YOUR_VOLUNTEER_FORM_ID?transparentBackground=1&hideTitle=1"
          width="100%"
          height="800"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Volunteer Application Form"
        />
      </FormWrapper>
      <SupportText>
        Questions? Email us at info@brightsparks.academy or DM us on Instagram @BrightSparksAcademy.
      </SupportText>
      <FallbackLink href="https://tally.so/r/YOUR_VOLUNTEER_FORM_ID" target="_blank">
        Having trouble with the form? Click here to open it in a new tab →
      </FallbackLink>
      <ActionButton href="https://craft.do/your-positions-link" target="_blank">
        View All Positions
      </ActionButton>
    </FormSection>

    {/* Testimonials Section */}
    <TestimonialsSection>
      <SectionTitle>What Our Volunteers Say</SectionTitle>
      <TestimonialGrid>
        {[
          { name: 'Alex P.', role: 'Tutor', quote: 'Volunteering here sharpened my leadership skills and boosted my confidence.' },
          { name: 'Jordan R.', role: 'Workshop Leader', quote: 'I loved the flexibility and the real impact I made.' },
        ].map((t, idx) => (
          <TestimonialCard key={idx} style={{ animationDelay: `${idx * 0.2}s` }}>
            <Quote>“{t.quote}”</Quote>
            <Author>{t.name} – {t.role}</Author>
          </TestimonialCard>
        ))}
      </TestimonialGrid>
    </TestimonialsSection>

    {/* Final CTA & Footer */}
    <FinalCTA>
      <FinalText>You have the power to change lives—starting today.</FinalText>
      <PrimaryButton href="#apply-form">Become a Volunteer</PrimaryButton>
    </FinalCTA>

  </PageWrapper>
);

export default Internships;

// Styled Components

const PageWrapper = styled.div`
  font-family: 'Inter', sans-serif;
  color: #000;
`;

const HeroSection = styled.section`
  background: #fffbea;
  padding: 4rem 2rem;
  text-align: center;
  animation: ${fadeInUp} 0.6s ease-out;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
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
  display: inline-flex;
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
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
`;

const SecondaryButton = styled.a`
  border: 2px solid #000;
  color: #000;
  padding: 12px 24px;
  border-radius: 9999px;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
`;

const ValuePropsSection = styled.section`
  padding: 4rem 2rem;
  background: #ffffff;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const PropsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const PropCard = styled.div`
  text-align: center;
  padding: 2rem;
  border-radius: 1rem;
  animation: ${fadeInUp} 0.6s ease-out forwards;
`;

const PropIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ffd900;
`;

const PropTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const PropDesc = styled.p`
  font-size: 1rem;
`;

const RolesSection = styled.section`
  padding: 4rem 2rem;
  background: #f7f3e8;
`;

const RolesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
`;

const RoleCard = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 1rem;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
`;

const RoleTitle = styled.h4`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const RoleDesc = styled.p`
  font-size: 1rem;
`;

const RoleTime = styled.p`
  font-size: 0.875rem;
  margin-top: 1rem;
  font-style: italic;
`;

const FormSection = styled.section`
  padding: 4rem 2rem;
  background: #ffffff;
  text-align: center;
`;

const FormWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: #fffbea;
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

const FallbackLink = styled.a`
  display: block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #000;
  text-decoration: underline;
`;

const ActionButton = styled.a`
  display: inline-block;
  margin-top: 1rem;
  background: #ffd900;
  color: #000;
  padding: 10px 20px;
  border-radius: 9999px;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
`;

const TestimonialsSection = styled.section`
  padding: 4rem 2rem;
  background: #ffffff;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
  gap: 2rem;
`;

const TestimonialCard = styled.div`
  background: #fffbea;
  padding: 1.5rem;
  border-radius: 1rem;
  animation: ${fadeInUp} 0.6s ease-out forwards;
`;

const Quote = styled.p`
  font-style: italic;
  margin-bottom: 1rem;
`;

const Author = styled.p`
  font-weight: bold;
  font-size: 0.875rem;
`;

const FinalCTA = styled.section`
  padding: 4rem 2rem;
  background: #f7f3e8;
  text-align: center;
`;

const FinalText = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;


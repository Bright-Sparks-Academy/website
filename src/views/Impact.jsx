import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
// import heroImage from '../images/impact-hero.jpg'; // replace with actual path
// // import gallery images
// import img1 from '../images/gallery1.jpg';
// import img2 from '../images/gallery2.jpg';
// import img3 from '../images/gallery3.jpg';
// import img4 from '../images/gallery4.jpg';
// import img5 from '../images/gallery5.jpg';
// import img6 from '../images/gallery6.jpg';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Impact = () => (
  <PageWrapper>
    {/* Hero Section */}
    <HeroSection>
      <Overlay />
      <HeroContent>
        <Headline>Real Results. Global Impact.</Headline>
        <Subheadline>
          From the Bay Area to Nigeria, Bright Sparks is shaping brighter futures through education, one act at a time.
        </Subheadline>
        <CTAButton to="/donate">Support Our Work</CTAButton>
      </HeroContent>
    </HeroSection>

    {/* Stat Cards Section */}
    <StatsSection>
      {[
        { stat: '25 Textbooks Donated', caption: 'To schoolchildren in Nigeria', icon: '📚' },
        { stat: '20 Reading Lights Shipped', caption: 'To low-income families', icon: '💡' },
        { stat: 'Students in 5 Countries', caption: '', icon: '🌍' },
        { stat: '2,000+ Tutoring Hours', caption: 'Delivered worldwide', icon: '🧠' },
        { stat: '50+ Trained Volunteers', caption: '', icon: '🤝' },
        { stat: '100% Improved Confidence', caption: 'Student self-reports', icon: '🎓' },
      ].map((item, idx) => (
        <StatCard key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
          <Icon>{item.icon}</Icon>
          <Stat>{item.stat}</Stat>
          <Caption>{item.caption}</Caption>
        </StatCard>
      ))}
    </StatsSection>

    {/* Testimonials Section */}
    <TestimonialsSection>
      <SectionTitle>Stories That Matter</SectionTitle>
      <TestimonialGrid>
        {[
          { name: 'Amina S., Kenya', quote: 'Bright Sparks gave my community access to books we never had.' },
          { name: 'David L., CA', quote: 'The tutoring sessions boosted my son’s confidence and grades.' },
        ].map((t, idx) => (
          <TestimonialCard key={idx} style={{ animationDelay: `${idx * 0.2}s` }}>
            <Quote>“{t.quote}”</Quote>
            <Author>{t.name}</Author>
          </TestimonialCard>
        ))}
      </TestimonialGrid>
    </TestimonialsSection>

    {/* Gallery Section */}
    <GallerySection>
      <SectionTitle>See Our Work in Action</SectionTitle>
      {/* <GalleryGrid>
        {[img1, img2, img3, img4, img5, img6].map((src, idx) => (
          <GalleryItem key={idx}>
            <GalleryImage src={src} alt={`Impact ${idx + 1}`} />
          </GalleryItem>
        ))}
      </GalleryGrid> */}
    </GallerySection>

    {/* Final CTA Section */}
    <FinalCTA>
      <FinalText>Want to Help Us Make an Even Bigger Impact?</FinalText>
      <CTAButton to="/join">Become a Volunteer</CTAButton>
      <SecondaryCTA to="/contact">Contact Us to Support</SecondaryCTA>
    </FinalCTA>

    {/* Footer */}
    <Footer>
      {/* Add footer content here later */}
    </Footer>
  </PageWrapper>
);

export default Impact;

// Styled Components

const PageWrapper = styled.div`
  font-family: 'Inter', sans-serif;
  color: #000;
`;

const HeroSection = styled.section`
  position: relative;
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

const Headline = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subheadline = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const CTAButton = styled(Link)`
  background: #000;
  color: #ffd900;
  padding: 12px 24px;
  border-radius: 9999px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 1rem;
  display: inline-block;
  &:hover {
    opacity: 0.8;
  }
`;

const StatsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
`;

const StatCard = styled.div`
  background: #fff;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  animation: ${fadeInUp} 0.6s ease-out forwards;
`;

const Icon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Stat = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Caption = styled.p`
  font-size: 1rem;
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const TestimonialCard = styled.div`
  background: #fffbea;
  border-radius: 1rem;
  padding: 1.5rem;
  animation: ${fadeInUp} 0.6s ease-out forwards;
`;

const Quote = styled.p`
  font-style: italic;
  margin-bottom: 1rem;
`;

const Author = styled.p`
  font-weight: bold;
`;

const GallerySection = styled.section`
  padding: 4rem 2rem;
`;

// const GalleryGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
//   gap: 1rem;
// `;

// const GalleryItem = styled.div`
//   overflow: hidden;
//   border-radius: 1rem;
// `;

// const GalleryImage = styled.img`
//   width: 100%;
//   height: auto;
//   display: block;
//   transition: transform 0.3s;
//   &:hover {
//     transform: scale(1.05);
//   }
// `;

const FinalCTA = styled.section`
  text-align: center;
  padding: 4rem 2rem;
`;

const FinalText = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const SecondaryCTA = styled(Link)`
  margin-left: 1rem;
  background: transparent;
  border: 2px solid #000;
  color: #000;
  padding: 12px 24px;
  border-radius: 9999px;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    background: rgba(0,0,0,0.05);
  }
`;

const Footer = styled.footer`
  /* Footer styling placeholder */
  padding: 2rem;
`;

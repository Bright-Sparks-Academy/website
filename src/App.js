import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Landing from './views/Landing.jsx'
import Programs from './views/Programs.jsx'
import Contact from './views/Contact.jsx'
import Impact from './views/Impact.jsx'
import Internships from './views/Internships.jsx'
import ProjectCodara from './views/ProjectCodara.jsx'
import Join from './views/Join.jsx'
import FAQ from './views/FAQ.jsx'
import Origin from './views/Origin.jsx'
import Connect from './views/Connect.jsx'
import NotFound from './views/NotFound.jsx';

import GlobalStyle from './GlobalStyles';

const App = () => {
  
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/origin" element={<Origin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/project-codara" element={<ProjectCodara />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/join" element={<Join />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
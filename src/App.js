import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './views/Landing.jsx'
import Contact from './views/Contact.jsx'
import Donate from './views/Donate.jsx'
import Impact from './views/Impact.jsx'
import Internships from './views/Internships.jsx'
import Join from './views/Join.jsx'
import Origin from './views/Origin.jsx'
import AppPage from './views/App.jsx'
import NotFound from './views/NotFound.jsx';

import GlobalStyle from './GlobalStyles';

const App = () => {
  
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/origin" element={<Origin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/join" element={<Join />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
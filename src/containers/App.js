import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SectionBanner from '../components/Banner';
import SectionInformation from '../components/SectionInformation';
import SectionGraduation from '../components/SectionGraduation';
import SectionExperiences from '../components/SectionExperiences';
import SectionSkill from '../components/SectionSkill';

function App() {
  return (
    <>
      <Header />
      <SectionBanner />
      <SectionInformation />
      <SectionGraduation />
      <SectionExperiences />
      <SectionSkill />
      <Footer />
    </>
  );
}

export default App;

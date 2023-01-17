import './App.css';
import 'normalize.css';
import React from 'react';
import Header from './Header';
import Landing from './component/landing/Landing';
import Articles from './component/article/Articles';
import Gallery from './component/gallery/Gallery';
import Features from './component/feature/Features';
import Testmonials from './component/testimonials/Testmonials';
import Team from './component/team/Team';
import Services from './component/services/Services';
import OuerSkills from './component/ouerSkills/OuerSkills';
function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Articles />
      <Gallery />
      <Features />
      <Testmonials />
      <Team />
      <Services />
      <OuerSkills />
    </div>
  );
}

export default App;

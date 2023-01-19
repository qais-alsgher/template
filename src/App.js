import "./App.css";
import "normalize.css";
import React from "react";
import Header from "./Header";
import Landing from "./component/landing/Landing";
import Articles from "./component/article/Articles";
import Gallery from "./component/gallery/Gallery";
import Features from "./component/feature/Features";
import Testmonials from "./component/testimonials/Testmonials";
import Team from "./component/team/Team";
import Services from "./component/services/Services";
import OuerSkills from "./component/ouerSkills/OuerSkills";
import WorkSteps from "./component/workSteps/WorkSteps";
import Event from "./component/event/Event";
import Pricing from "./component/pricing/Pricing";
import Videos from "./component/videos/Videos";
import Stats from "./component/stats/Stats";
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
      <WorkSteps />
      <Event />
      <Pricing />
      <Videos />
      <Stats />
    </div>
  );
}

export default App;

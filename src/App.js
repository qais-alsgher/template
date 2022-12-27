import './App.css';
import 'normalize.css';
import React from 'react';
import Header from './Header';
import Landing from './component/Landing';
import Articles from './component/Articles';
function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Articles />

    </div>
  );
}

export default App;

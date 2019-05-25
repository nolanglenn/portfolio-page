import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import About from './components/About/index';
import Projects from './components/Projects/index';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <About />
        <Projects />
      </Wrapper>
    </div>
  );
}

export default App;

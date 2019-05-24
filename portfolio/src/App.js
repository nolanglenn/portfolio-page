import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import About from './components/About/index';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <About />
      </Wrapper>
    </div>
  );
}

export default App;

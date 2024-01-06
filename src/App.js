import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Spinner from './components/Spinner';
import Random from './components/Random';
import Tag from "./components/Tag";


function App() {



  return (
    <div className='appDiv'>
      <h1 className='app_gif_head' >GIF Generator</h1>
      <Random />
      <Tag />
    </div>
  );
}

export default App;

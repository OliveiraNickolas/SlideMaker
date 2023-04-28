import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import './App.css';
import InputForm from './components/InputForm/InputForm';
import ThemeSelector from './components/ThemeSelector/ThemeSelector';

const emojiLaugh = <img src="https://openmoji.org/data/color/svg/1F602.svg" className="emoji-laugh" />

function App() {
  const [selectedTheme, setSelectedTheme] = useState('light');

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
  };

  return (
    <div className="App">
      <h1 className='page-title'>Fazedor de slides para crentes {emojiLaugh}</h1>
      <InputForm selectedTheme={selectedTheme} />
      <ThemeSelector selectedTheme={selectedTheme} handleThemeChange={handleThemeChange} />
      <a href="https://github.com/OliveiraNickolas" target="_blank" rel="noopener noreferrer" className="footer-text">
        <span className="footer-text-wrapper">
          Criado por Nickolas Oliveira
          <FaGithub className="github-icon" />
        </span>
      </a>
    </div>
  );
}

export default App;


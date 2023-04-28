import React, { useState } from 'react';
import './ThemeSelector.css'

const ThemeSelector = ({ selectedTheme, handleThemeChange }) => {


  return (
    <div className="theme-container">

      <div className={`theme-selector-light ${selectedTheme === 'light' ? 'selected' : ''}`} onClick={() => handleThemeChange('light')}>

        <p className="up-text">
          Light
        </p>

        <p className="down-text">
          theme
        </p>

      </div>

      <div className={`theme-selector-dark ${selectedTheme === 'dark' ? 'selected' : ''}`} onClick={() => handleThemeChange('dark')}>

        <p className="up-text">
          Dark
        </p>

        <p className="down-text">
          theme
        </p>

      </div>

    </div>
  );
};

export default ThemeSelector;

import React, { useState } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import pptxgen from 'pptxgenjs';
import './InputForm.css';

const InputForm = ({ selectedTheme }) => {
    const [inputValue, setInputValue] = useState('');
        
    const handleGenerateClick = async () => {
        const url = document.querySelector('.search-input').value;
        console.log(`Generate button clicked with URL: ${url} and theme: ${selectedTheme}`);
    
        try {
          const proxyUrl = `http://localhost:3001/api/scrape?url=${encodeURIComponent(url)}`;
          const response = await axios.get(proxyUrl);
          const $ = cheerio.load(response.data);
    
          const title = $('.head-title').text().trim();
          const author = $('.head-subtitle span').text().trim();
          const verses = $('.lyric-original p').toArray().map(verse => $(verse).html().trim().replace(/<br\s?\/?>/g, '\n'));
    
          createSlides(title, author, verses, selectedTheme);
        } catch (error) {
          console.error('Erro ao buscar informações da música:', error);
        }
      };
    
      const createSlides = (title, author, verses, theme) => {
        const pptx = new pptxgen();
        const textColor = theme === 'light' ? '000000' : 'FFFFFF';
        const bgColor = theme === 'light' ? 'FFFFFF' : '000000';
    
        const titleSlide = pptx.addSlide();
        titleSlide.background = { color: bgColor };
        titleSlide.addText(title, { x: 0.295, y: 1.5, h: 0.45, w: 9.45, fontFace: 'Arial', fontSize: 45, color: textColor, bold: true, align: 'center' });
        titleSlide.addText(author, { x: 0.295, y: 2.5, h: 0.4, w: 9.45, fontFace: 'Arial', fontSize: 39, color: textColor, align: 'center', italic: true });
    
        verses.forEach((verse) => {
          const verseSlide = pptx.addSlide();
          verseSlide.background = { color: bgColor };
          verseSlide.addText(verse, { x: 0.295, y: 0.16, w: 9.6, h: 5.12, fontFace: 'Arial', fontSize: 35, color: textColor, align: 'center', bold: true });
        });
    
        pptx.writeFile({ fileName: `${title} - ${author}.pptx` });
      };
      
      const handlePasteOrClear = () => {
        if (inputValue === '') {
          navigator.clipboard.readText().then((text) => setInputValue(text));
        } else {
          setInputValue('');
        }
      };
    
    
      return (
        <div className="input-form">
          <div className="input-container">
            <input
              type="text"
              placeholder="Cole o link da letra, escolha o tema e pronto! 🎉"
              className="search-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="button" onClick={handlePasteOrClear} className="clear">
              {inputValue === '' ? '📋' : '✖️'}
            </button>
          </div>
          <button type="button" onClick={handleGenerateClick} className="generate-button">
            Gerar Slide
          </button>
        </div>
      );
};

export default InputForm;
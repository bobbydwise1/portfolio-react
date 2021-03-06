import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function Projects(){
  const compBox = {
    border: "solid grey",
    backgroundColor: "light yellow"
  }

  const styleBold = {
    fontWeight: "bold",
    fontSize: "14px"
  }

  const styleItalicBold = {
    fontWeight: "bold",
    fontStyle: "italic"
  }

  const styleItalic = {
    fontStyle: "italic"
  }

  const styleNormal = {
    fontStyle: "normal"
  }


  return (
    <div style={compBox}>
      <h1>Projects</h1>
      <p>Below are listed some software projects I have worked on:</p>

        <h2 style={styleBold}>Clone of Classic Tetris</h2>
        <ul>
          <li style={styleItalicBold}>Epicodus</li>
          <li style={styleItalic}>Portland, Oregon, USA</li>
          <li style={styleNormal}>A clone attempt of the classic Nintendo Entertainment System of Tetris.  Done using Angular Framework, and the p5 javascript library.</li>
        </ul>

        <h2 style={styleBold}>Battleship</h2>
        <ul>
          <li style={styleItalicBold}>Epicodus</li>
          <li style={styleItalic}>Portland, Oregon, USA</li>
          <li style={styleNormal}>A clone of Battleship.  Done using the Ruby on Rails Framework.</li>
        </ul>
    </div>
  );
}




export default Projects;

import React from 'react'
import './Projects.css'
import ProjectLeft from './Project-left.jsx'
import ProjectRight from './Project-right.jsx'
import calcu from '../assets/calculator.png'
import dibujo from '../assets/dibujo.png'
import kahoot from '../assets/kahoot.png'
import memoria from '../assets/memoria.png'
import streaming from '../assets/streaming.png'
import dinners from '../assets/DinnersReady.png'

const Projects = () => (
  <div className="projects-cont">
    <div data-aos="fade-down" className="title">Projects</div>
    <ProjectLeft image={calcu} title="Analogue Calculator" desc="Analogue Calculator made with React.js, HTML and CSS. This project was built using Vite for a faster build time. With this calculator the user is able to perform addition, substraction, multiplication, division, and mod, allowing the use of decimals." />
    <ProjectRight image={dibujo} title="CSS Drawing" desc="This is a drawing of the pokemon, Squirtle. It was done using only CSS and HTML divs. This project was done to fully understand the toolset that only CSS can provide." />
    <ProjectLeft image={kahoot} title="Kahoot Copy" desc="An almost pixel-perfect copy of Kahoot.com. This was done using React, HTML, CSS, and JavaScript to recreate the entire interface. The project implements server-side rendering done with Express from scratch and was built with Webpack from scratch, aswell." />
    <ProjectRight image={memoria} title="Memory" desc="This is a memory game with a Regular Show theme. This project was done with React, HTML and CSS. There are 16 cards on the board and when the player matches 8 pairs the game is over." />
    <ProjectLeft image={streaming} title="Streaming App" desc="A project made to simulate a streamig app like Netflix. The Front-end for this project was done with React, JavaScript, HTML, and CSS. The Back-end was connected to a relational database using PostgreSQL in AWS. To connect the app to the database an API was implement using an API using Flask to develop it. " />
    <ProjectRight image={dinners} title="Dinner's Ready" desc="An application that grants the user access to recipes shared through a community of people who have run out of ideas of what to cook. This app is being developed in React Native and the prototypes have been done of Figma. " />
  </div>
)

export default Projects

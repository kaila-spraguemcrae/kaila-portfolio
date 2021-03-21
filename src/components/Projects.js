import React from 'react';
import Thumbnail from './Thumbnail';

const Projects = () => {
  return (
    <>
      <div className="projects-section" id="projects">
        <h1>PROJECTS</h1>
        <Thumbnail 
          link="https://kaila-spraguemcrae.github.io/linger/"
          image="https://media.giphy.com/media/iX5WqdLoWoCeLX5Rid/giphy.gif"
          title="Linger"
        />
        <Thumbnail 
          link="https://github.com/kaila-spraguemcrae/Guestly.Solution"
          image="https://s2.gifyu.com/images/recording27d055e818848817.gif"
          title="Guestly"
        />
        <Thumbnail 
          link="https://kaila-spraguemcrae.github.io/asmrbliss/"
          image="https://media.giphy.com/media/APZHwaaobTPjq2peE7/giphy.gif"
          title="ASMR Bliss"
        />
      </div>
    </>
  );
}

export default Projects;
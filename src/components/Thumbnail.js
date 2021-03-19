import React from 'react';
// import {Link} from 'react-router-dom';

const Thumbnail = (props) => {
  return (
    <div className="project">
      <a href={props.link}>
        <div className="project-photo">
          <img src={props.image} alt="Project"/>
        </div>
        <div className="project-title">{props.title}</div>
      </a>
    </div>
  );
}

export default Thumbnail;
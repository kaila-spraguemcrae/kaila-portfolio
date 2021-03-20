import React from 'react';
import myself from '../assets/img/myself.png';

const AboutMe = () => {
  return (
    <>
      <h1>ABOUT ME</h1>
      <p>
        Duis nec metus eu ipsum egestas porttitor dapibus eget dolor. Proin quis urna magna. Aliquam sollicitudin, augue id venenatis consectetur, ipsum lacus feugiat elit, mattis dapibus orci nisi nec nibh. Duis a nisi convallis, suscipit eros id, sollicitudin turpis. Vestibulum sed neque ut erat vestibulum vulputate sit amet euismod ante. Pellentesque pretium at libero quis varius. Ut maximus, mauris ut tempor molestie, ligula arcu porttitor orci, sed laoreet orci dui sit amet sem. Mauris hendrerit velit in tristique semper. Sed bibendum fringilla semper. Aenean tellus erat, hendrerit sit amet ipsum quis, suscipit maximus elit. Donec rutrum mauris quis dui sollicitudin, quis pellentesque turpis pharetra.
      </p>
      <img className="self-photo" src={myself} alt="a young women (Kaila S.M.) with brown hair smiling outdoors in a park"/>
    </>
  );
}

export default AboutMe;
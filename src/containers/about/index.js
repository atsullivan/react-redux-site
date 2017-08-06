import React from 'react';
import '../../styles/about.css';
import workspace from '../../assets/images/paper.jpg';

const About = () => (
  <div>
    <div className="header">
      <img src={workspace} alt="workspace"></img>
      <div className="header-text">
        <h1>About</h1>
        <p>
          I am a software engineer living in Santa Barbara California.
          I specialize in Rails and React.
        </p>
      </div>
    </div>

    <div className="my-story">
      <h2>My Story</h2>
      <hr/>
      <p>
        My name is Andrew Sullivan, but everyone calls me Sully.
        I graduated from Loyola Marymount University in 2015 with a Bachelor's Degree in Computer Science.
        I currenly work at Procore Technologies as a Rails Engineer.
        In my free time I like to design User Interfaces and experiment with new technologies.
      </p>
    </div>

    <img src={workspace} alt="workspace"></img>

    <div>
      <h2>What I Do</h2>
      <hr/>
    </div>

    <div>
      <h3>Web Development</h3>
    </div>

    <div>
      <h3>UI Design</h3>
    </div>

    <div>
      <h3>Web Security</h3>
    </div>

    <div>
      <h3>Brand Development</h3>
    </div>
  </div>
)

export default About

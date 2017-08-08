import React from 'react'
import headerImage from '../../assets/images/paper.jpg';

const Contact = () => (
  <div>
    <div className="header header-dark">
      <img src={headerImage} alt="workspace"></img>
      <div className="header-text">
        <h1>Contact</h1>
        <p>
          Let's talk.
        </p>
        <button className="btn btn-dark" href="#">See more</button>
      </div>
    </div>
  </div>
)

export default Contact

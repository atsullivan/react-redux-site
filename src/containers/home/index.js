import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import headerImage from '../../assets/images/plant1.jpg';

const Home = props => (
  <div>
    <div className="header header-dark">
      <img src={headerImage} alt="workspace"></img>
      <div className="header-text">
        <h1>Hello</h1>
        <p>
          I am a software engineer living in Santa Barbara California.
          I specialize in Rails and React.
        </p>
        <button className="btn btn-dark" href="#">See more</button>
      </div>
    </div>
  </div>
)

export default Home

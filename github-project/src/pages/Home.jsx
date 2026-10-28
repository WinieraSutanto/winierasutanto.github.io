import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
import Typewriter from 'typewriter-effect'

import picture from '../assets/picture.png'
import '../App.css'

function Title() {
  return (
    <div className="title">
      <h1>Let Me Introduce Myself</h1>
    </div>
  )
}

function Greeting() {
  return (
    <div className="greeting">
      <h1>Hi There! I'm Winiera Sutanto. Nice to meet you!</h1>
      <h1>
        <Typewriter
          options={{
            strings: ['Data Scientist'],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <div className="social-links">
        <SocialIcon
          url="https://github.com/WinieraSutanto"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/winiera-sutanto/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        />
      </div>
    </div>
  )
}

function Profile() {
  return (
    <div className="profile">
      <img src={picture} alt="Profile Picture" className="profile-picture" />
    </div>
  )
}

function Introduction() {
  return (
    <div className="introduction">
      <p>
        I'm a data scientist who loves working with data to gather insights and create products. Over time, I've explored various technologies and done various projects related to data.
      </p>
      <p>
        I'm proficient in Python, SQL, R, and Node.js. I enjoy working on both backend and frontend systems.
      </p>

      <p>
        My key are of interests include machine learning and natural language processing.
      </p>
    </div>
  )
}

function Home() {
  return (
    <main className="app-container">
      <div className="intro-profile-row">
        <Greeting />
        <Profile />
      </div>
      <div className="title-introduction-section">
        <Title />
        <Introduction />
      </div>
    </main>
  )
}

export default Home

import { useState } from 'react'

import picture from './assets/picture.png'
import books from './books.json'
import './App.css'


const projects = [
  {
    id: 1,
    name: 'A Data-Driven Semantic Search of HKTVmall Products based on Product Characteristics',
    description: 'This was a collaborative project that trained a semantic search model trained on e-commerce product data. The idea behind this project was to create a model that was able to take the semantics of a query in order to return more relevant search results.',
    link: 'https://github.com/WinieraSutanto/FYP',
    pdf: "/powerpoints/semantic_search.pdf"
  },
  {
    id: 2,
    name: 'A Choice of Red vs Blue: Does a US State’s Choice of President Affect their Unemployment Rate? ',
    description: 'This was a project that was the focus of my finance capstone. The main idea behind this project was analyzing whether a U.S state that had the same political alignment as the president would have noticable differences in the monthly unemployment rate. This project mainly utilized panel data regression in order to determing how impactful political party alignment is and if there was a time-lag involved.',
    link: 'https://github.com/WinieraSutanto/us-state-unemployment-analysis',
    pdf: "/powerpoints/unemployment_analysis.pdf"
  },
  {
    id: 3,
    name: 'Decoding Fares: Analyzing Contributing Factors to HK MTR Fare Pricing',
    description: 'This was a project that trained a machine learning model on HK MTR Route data. The main purpose behind this project was to determine which factors were the most important in determining HK MTR fares and create a model that determines the ideal price of an MTR route.',
    link: 'https://github.com/WinieraSutanto/hk-mtr-fare-modeling',
    pdf: "/powerpoints/mtr_analysis.pdf"
  },
  {
    id: 4,
    name: 'Flight Status of US Marketing Carriers from 2018-2022 ',
    description: 'This was a simple data analysis project that analyzed the flight status of US marketing carriers from 2018-2022. This project mainly looked at previous flight data to determine which flight carriers had the most delays and cancellation.',
    link: 'https://github.com/WinieraSutanto/flights-analysis',
    pdf: "/powerpoints/flight_carrier_analysis.pdf"
  }
]

function BookTable(props) {
  const [books] = useState(props.books)
  const [currentPage, setCurrentPage] = useState(0)
  const pageSize = 4

  const pageCount = Math.ceil(books.length / pageSize)
  const visibleBooks = books.slice(currentPage * pageSize, currentPage * pageSize + pageSize)

  function goUp() {
    setCurrentPage((current) => Math.max(current - 1, 0))
  }

  function goDown() {
    setCurrentPage((current) => Math.min(current + 1, pageCount - 1))
  }

  return (
    <div className="book-table">
      <div className="book-table-grid">
        {visibleBooks.map((book) => (
          <div key={book.id} className="book-card">
            <div className="book-information">
              <img src={book.picture} alt={`${book.name} cover`} />
              <p>Title: {book.name}</p>
              <p>Author: {book.author}</p>
            </div>

            <div className="book-review">
              <p>{book.review}</p>
              <p>Score: {book.score} / 10</p>
            </div>
          </div>
        ))}
      </div>

      {pageCount > 1 && (
        <div className="book-table-controls">
          <button type="button" onClick={goUp} disabled={currentPage === 0} aria-label="Scroll up">
            ▲
          </button>
          <button type="button" onClick={goDown} disabled={currentPage === pageCount - 1} aria-label="Scroll down">
            ▼
          </button>
        </div>
      )}
    </div>
  )
}

function ProjectTable(props) {
  const [projects, setProjects] = useState(props.projects)

  return (
    <div className="project-table">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <h4>{project.name}</h4>
          <p>{project.description}</p>
          <p> <a href={project.link}> Github Link </a> </p>
          <p> <a href={project.pdf} download>PDF Link</a> </p>
        </div>
      ))}
    </div>
  )
}

function Header(props) {
  return (
    <div className="header"> {props.text} </div>
  )
}

function Description(props) {
  return (
    <div className="description"> {props.text} </div>
  )
}

function Profile() {
  return (
    <div className="profile">
      <img src={picture} alt="Profile Picture" className="profile-picture" />
      <h3 className="profile-name">Winiera (Wini) Sutanto</h3>
      <p className="profile-description"> Email Adress: winiera27@gmail.com</p>
      <p className="profile-description"> Phone Number: +852-97589617</p>
      <p className="profile-description"> <a href="https://www.linkedin.com/in/winiera-sutanto/">  LinkedIn Profile </a></p>
    </div> 
  )
}

function Introduction() {
  return (
    <div className="introduction">
      <p> Hi, my name is Winiera Sutanto, but most people call me Wini. I am a final year Indonesian student at the University of Hong Kong majoring in Data Science with a double major in Finance. 
        I am passionate about machine learning and natural language processing, and have done various projects in these topics. In fact, I made this portfolio website to show off these projects and practice using ReactJS.
        My projects are below with a brief description of each project, so check it out! I am also using this website to practice my web development skills, so some of my personal practice is at the bottom.
      </p>
    </div>
  )
}
function App() {

  return (
    <div className="app-container">
      
      <div className="intro-profile-row">
        <Profile />
        <Introduction />
      </div>
      <Header text="Projects" />
      <Description text="Here are some of the projects that I have done in the past, with a brief description of each project and a link to the GitHub repository." />
      <ProjectTable projects={projects} />

      <Header text="Books I've Read" />
      <Description text="In my free time, I like reading books, usually fiction. Right now, I am currently reading a web series titled `Ward` by Wildbow. These are some books I have read and my thoughts/review on them. It has been a while since I've read some of these entries, so the passage of time might skew my thoughts." />
      <BookTable books={books} />
    </div>
  )
}

export default App

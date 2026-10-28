import '../App.css'

function Greeting() {
  return (
    <div className="greeting about-greeting">
      <h1>Know Who I am</h1>
    </div>
  )
}

function Introduction() {
  return (
    <div className="introduction">
      <p>
        Hi there! My name is Winiera Sutanto, but you can just call me William.
        <br></br>I come from Indonesia. I studied Data Science with a double major in Finance at the University of Hong Kong.
        <br></br>I am currently open to work opportunities, however I am working on various projects and learning various technologies in my free time.
      </p>

      <p>
        Outside of coding, I have various hobbies and interests such as:
        <ul>
          <li>Reading Books</li>
          <li>Cycling</li>
          <li>Video games</li>
        </ul>
      </p>
    </div>
  )
}

const skillset = [
  { name: 'Python', icon: '/TechIcons/python.svg' },
  { name: 'SQL', icon: '/TechIcons/sql.svg' },
  { name: 'R', icon: '/TechIcons/r.svg' },
  { name: 'C++', icon: '/TechIcons/cpp.svg' },
  { name: 'HTML5', icon: '/TechIcons/html5.svg' },
  { name: 'CSS3', icon: '/TechIcons/css3.svg' },
  { name: 'JavaScript', icon: '/TechIcons/javascript.svg' },
    { name: 'Node.js', icon: '/TechIcons/nodejs.svg' },
  { name: 'React.js', icon: '/TechIcons/react.svg' },
  { name: 'Git', icon: '/TechIcons/git.svg' },
  { name: 'MongoDB', icon: '/TechIcons/mongo.svg' }
]

const tools = [
  { name: 'GitHub', icon: '/TechIcons/github.svg' },
  { name: 'Jupyter', icon: '/TechIcons/jupyter.svg' },
  { name: 'VS Code', icon: '/TechIcons/vscode.svg' },
]

function TechnologyIcons({ technologies }) {
  return (
    <div className="technology-icons">
      {technologies.map((technology) => (
        <div className="technology-icon" key={technology.name}>
          <img src={technology.icon} alt="" />
          <span>{technology.name}</span>
        </div>
      ))}
    </div>
  )
}

function TechnologySection({ title, technologies }) {
  return (
    <section className="technology-section">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <TechnologyIcons technologies={technologies} />
    </section>
  )
}

function About() {
  return (
    <main className="app-container">
      <Greeting />
      <Introduction />
      <TechnologySection title="Professional Skillset" technologies={skillset} />
      <TechnologySection title="Tools I Use" technologies={tools} />
    </main>
  )
}

export default About

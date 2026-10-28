import '../App.css'

const projects = [
  {
    id: 1,
    name: 'A Data-Driven Semantic Search of HKTVmall Products based on Product Characteristics',
    description: 'This was a collaborative project that trained a semantic search model trained on e-commerce product data. The idea behind this project was to create a model that was able to take the semantics of a query in order to return more relevant search results.',
    link: 'https://github.com/WinieraSutanto/FYP',
    pdf: './powerpoints/semantic_search.pdf',
  },
  {
    id: 2,
    name: 'A Choice of Red vs Blue: Does a US State’s Choice of President Affect their Unemployment Rate? ',
    description: 'This was a project that was the focus of my finance capstone. The main idea behind this project was analyzing whether a U.S state that had the same political alignment as the president would have noticable differences in the monthly unemployment rate. This project mainly utilized panel data regression in order to determing how impactful political party alignment is and if there was a time-lag involved.',
    link: 'https://github.com/WinieraSutanto/us-state-unemployment-analysis',
    pdf: './powerpoints/unemployment_analysis.pdf',
  },
  {
    id: 3,
    name: 'Decoding Fares: Analyzing Contributing Factors to HK MTR Fare Pricing',
    description: 'This was a project that trained a machine learning model on HK MTR Route data. The main purpose behind this project was to determine which factors were the most important in determining HK MTR fares and create a model that determines the ideal price of an MTR route.',
    link: 'https://github.com/WinieraSutanto/hk-mtr-fare-modeling',
    pdf: './powerpoints/mtr_analysis.pdf',
  },
  {
    id: 4,
    name: 'Flight Status of US Marketing Carriers from 2018-2022 ',
    description: 'This was a simple data analysis project that analyzed the flight status of US marketing carriers from 2018-2022. This project mainly looked at previous flight data to determine which flight carriers had the most delays and cancellation.',
    link: 'https://github.com/WinieraSutanto/flights-analysis',
    pdf: './powerpoints/flight_carrier_analysis.pdf',
  },
]

function Projects() {
  return (
    <main className="app-container">
      <h2 className="section-heading">Projects</h2>
      <p className="description">Here are some of the projects that I have done in the past, with a brief description of each project and a link to the GitHub repository.</p>
      <div className="project-table">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <p><a href={project.link}>Github Link</a></p>
            <p><a href={project.pdf} download>Presentation Link</a></p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Projects

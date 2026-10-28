import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'

import Header from './components/Header.jsx'
import About from './pages/About.jsx'
import Books from './pages/Books.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Resume from './pages/Resume.jsx'

function App() {
  return (
    <HashRouter>
      <div className="site-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/books" element={<Books />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App

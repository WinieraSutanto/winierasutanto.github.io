import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

import resume from '../assets/resume.pdf'
import '../App.css'

import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString()

function Resume() {
  const [numPages, setNumPages] = useState(null)
  const [loadError, setLoadError] = useState('')

  return (
    <main className="app-container resume-page">
      <a className="resume-download" href={resume} download="resume.pdf">
        Download CV
      </a>
      {loadError ? (
        <p role="alert">Unable to load the resume: {loadError}</p>
      ) : (
        <div className="resume-document">
          <Document
            file={resume}
            loading="Loading resume..."
            onLoadSuccess={({ numPages: pageCount }) => setNumPages(pageCount)}
            onLoadError={(error) => setLoadError(error.message)}
          >
            {numPages &&
              Array.from({ length: numPages }, (_, index) => (
                <Page key={`resume-page-${index + 1}`} pageNumber={index + 1} width={800} />
              ))}
          </Document>
        </div>
      )}
    </main>
  )
}

export default Resume

import { useState } from 'react'

import books from '../books.json'
import '../App.css'

function BookTable({ books: bookList }) {
  const [currentPage, setCurrentPage] = useState(0)
  const pageSize = 4

  const pageCount = Math.ceil(bookList.length / pageSize)
  const visibleBooks = bookList.slice(currentPage * pageSize, currentPage * pageSize + pageSize)

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

function Books() {
  return (
    <main className="app-container">
      <h2 className="section-heading">Books I&apos;ve Read</h2>
      <p className="description">In my free time, I like reading books, usually fiction. Right now, I am currently reading a web series titled `Ward` by Wildbow. These are some books I have read and my thoughts/review on them. It has been a while since I&apos;ve read some of these entries, so the passage of time might skew my thoughts.</p>
      <BookTable books={books} />
    </main>
  )
}

export default Books

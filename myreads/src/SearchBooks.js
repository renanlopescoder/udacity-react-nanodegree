import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchBooks extends Component {
  
  // updateQuery = query => this.setState({ query: query.trim() })
  // clearQuery = query => this.setState({ query: '' })
  
  render() {

    
      // let queryBooks = this.props.books
    
      // if(query) {
      //   const match = new RegExp(escape(query), 'i')
      //   queryBooks = this.props.books.filter((book) => match.test(book.title) || match.test(book.authors))
      // } else {
      //   queryBooks = this.props.books
      // }
    return (
      <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" value={this.props.query} 
            onChange={
              (event) => {
                this.props.updateQuery(event.target.value)
              }
            }/>
          
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {
            this.props.books.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}></div>
                    <div className="book-shelf-changer">
                      <select>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
            ))
          }
        </ol>
      </div>
    </div>
    )
  }
}

export default SearchBooks
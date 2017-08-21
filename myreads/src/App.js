import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import BooksShelves from './BooksShelves'
import './App.css'
import { Route } from 'react-router-dom'
import { escapeRegExp } from 'escape-string-regexp'

class App extends React.Component {
  state = {
    books: [],
    myBooks: [],
    query: ''
  }

  componentDidMount() {
    BooksAPI.getAll().then((myBooks) => this.setState({ myBooks }))
  }

  updateQuery = (query) => BooksAPI.search(query, 20).then((books) => {
    this.setState({ books:books, query: query })
  })

  updateMyBook() {

  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks books={this.state.books} updateQuery={this.updateQuery} updateMyBook={this.updateMyBook}/>
        )}>
        </Route>
        <Route exact path="/" render={() => (
          <BooksShelves myBooks={this.state.myBooks} onChangeBook={this.onChangeBook} />
        )}>
        </Route>
      </div>
    )
  }
}

export default App

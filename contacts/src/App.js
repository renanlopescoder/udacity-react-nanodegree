import React, { Component } from 'react';
import ListContacts from './ListContacts.js'
import CreateContact from './CreateContact.js'
import * as ContactsAPI from './utils/ContactsAPI'
import { Route } from 'react-router-dom'

class App extends Component {

    state = {
      contacts: []
    }
    componentDidMount() {
      ContactsAPI.getAll().then((contacts) => this.setState({ contacts }))
    }
    removeContact = (contact) => {
      this.setState((state) => ({
        contacts: state.contacts.filter((cont) => cont.id !== contact.id)
      }))

      ContactsAPI.remove(contact)
    }

    onCreateContact = (contact) => {
      ContactsAPI.create(contact).then((contact) => {
          this.setState( 
            (state) => (
              {
                contacts: state.contacts.concat([ contact ])
              }
            )
          )
      })
    }

    render() {
      return (
        <div className="app">
          <Route exact path= "/" render={() => (
            <ListContacts contacts={this.state.contacts} onDeleteContact={this.removeContact}/>
          )}/>
          <Route path="/create" render={( {history} ) => (
            <CreateContact 
              onCreateContact = { 
                (contact) => {
                  this.onCreateContact(contact)
                  history.push('/')
                }
              }
            />
          )}/>
        </div>
      )
    }
 
}

export default App;

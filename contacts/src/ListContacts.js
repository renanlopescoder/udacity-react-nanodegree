import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContacts: PropTypes.func.isRequired
  }
  state = {
    query: ''
  }

  updateQuery = query => this.setState({ query: query.trim() })

  clearQuery = query => this.setState({ query: '' })

  render() {
    const { contacts, onDeleteContact } = this.props
    const { query } = this.state

    let showingContacts

    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingContacts = contacts.filter((contact) => match.test(contact.name))
    } else {
      showingContacts = contacts
    }

    showingContacts.sort(sortBy('name'))
    return (
      <div className="list-contacts">
        {/* {JSON.stringify(this.state)} */}
        <div className="list-contacts-top">
          <input 
            className="search-contacts"
            type="text"
            placeholder="Pesquisa"
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
             />
             <Link 
              to="/create"
              className="add-contact"
             >Adicionar Contato</Link> 
        </div>

        {showingContacts.length !== contacts.length && (
          <div className="showing-contacts">
            <span>Filtrado {showingContacts.length} de {contacts.length} Contatos</span>
            <button onClick={() => this.clearQuery()}>Limpar</button>
          </div>
        )}

        <ol className="contact-list">
          {
            showingContacts.map((contact) => 
              (
                <li className="contact-list-item" key={contact.id}>
                  <div className="contact-avatar"
                  style={{
                    backgroundImage: `url(${contact.avatarURL})`
                  }}>
                  </div>
                  <div className="contact-details">
                    <p>{contact.name}</p>
                    <p>{contact.email}</p>
                  </div>                
                  <button className="contact-remove" onClick={() => onDeleteContact(contact)}>
                      Remove
                  </button>
                </li>
              )
            )
          }
        </ol>
      </div>
    )
  }
}

export default ListContacts
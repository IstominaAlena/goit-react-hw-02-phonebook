import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Form from './components/Form';
import ContactList from './components/ContactList';

import './styles/App.css';

class App extends Component {
  state = {
    contacts: [],
  };

  addContactHandler = formState => {
    const contact = {
      ...formState,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  deleteContactHandler = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>

        <Form submitedData={this.addContactHandler} />

        <h2>Contacts</h2>

        <ContactList contacts={this.state.contacts} onDeleteItem={this.deleteContactHandler} />
      </>
    );
  }
}

export default App;

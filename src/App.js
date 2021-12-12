import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Section from './shared/components/Section';
import Form from './components/Form';
import Input from './shared/components/Input';
import ContactList from './components/ContactList';

import './styles/App.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
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
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  filterChangeHandler = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  filterContactsHandler = () => {
    const { contacts, filter } = this.state;
    const lowerCaseFilter = filter.toLowerCase();

    if (!filter) {
      return contacts;
    }

    const filteredContacts = contacts.filter(({ name }) => {
      const lowerCaseName = name.toLowerCase();
      return lowerCaseName.includes(lowerCaseFilter);
    });

    return filteredContacts;
  };

  render() {
    const { filterContactsHandler, addContactHandler, filterChangeHandler, deleteContactHandler } =
      this;

    const contacts = filterContactsHandler();

    return (
      <>
        <Section title={'Phonebook'} classEl={'phonebook'}>
          <Form submitedData={addContactHandler} />
          <Input
            labelName="Find contact by name"
            value={this.state.filter}
            onChange={filterChangeHandler}
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholderValue="Search"
          />
        </Section>

        <Section title={'Contacts'} classEl={'contacts'}>
          <ContactList contacts={contacts} onDeleteItem={deleteContactHandler} />
        </Section>
      </>
    );
  }
}

export default App;

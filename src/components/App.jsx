import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);

      return;
    }

    this.setState({
      contacts: [{ name, number, id: nanoid() }, ...contacts],
      filter: '',
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  handleFilterChange = ({ target }) => {
    const { value } = target;
    this.setState({ filter: value });
  };

  filterContact = () => {
    const { filter, contacts } = this.state;

    return {
      filteredContacts: contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      ),
    };
  };

  render() {
    const { filter, contacts } = this.state;
    const { filteredContacts } = this.filterContact();

    return (
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>

        {contacts[0] ? (
          <Filter value={filter} onFilter={this.handleFilterChange} />
        ) : (
          <Notification message="No contacts added" />
        )}
        {contacts[0] && !filteredContacts[0] && (
          <Notification message="No contact found" />
        )}
        {filteredContacts[0] && (
          <ContactList
            contacts={filteredContacts}
            onDelete={this.deleteContact}
          />
        )}
      </div>
    );
  }
}

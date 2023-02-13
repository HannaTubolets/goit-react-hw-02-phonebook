import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    this.setState({
      [inputName]: inputValue,
    });
    // const { name, value } = event.target;
    // this.setState({ [name]: value });
  };

  onAddContact = contact => {
    const id = nanoid();
    const name = contact.name;
    const number = contact.number;
    const contactsLists = [...this.state.contacts];

    if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
      contactsLists.push({ name, id, number });
    }

    this.setState({ contacts: contactsLists });
  };

  handleDelete = event => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== event),
    }));
  };

  getFilteredContacts = () => {
    const filteredContactsList = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });

    return filteredContactsList;
  };

  render() {
    const { filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.onAddContact} />
        <h2> Contacts</h2>
        <Filter filter={filter} handleInputChange={this.handleInputChange} />
        <ContactList
          contacts={this.getFilteredContacts()}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

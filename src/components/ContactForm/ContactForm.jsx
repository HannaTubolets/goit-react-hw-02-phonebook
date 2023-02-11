import { Component } from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  inputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <form className={css.form}>
          <label className={css.label}>Name</label>
          <input
            className={css.name}
            onChange={this.inputChange}
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Enter your name"
            autofocus="on"
            autocomplete="off"
          />

          <label className={css.label}>Number</label>
          <input
            className={css.phone}
            onChange={this.inputChange}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Enter your number"
            autofocus="on"
            autocomplete="off"
            required
          />
        </form>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </>
    );
  }
}

import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    //  this.props.handleSubmit(this.state);
    //   this.formReset();

    const form = event.currentTarget;
    this.props.handleSubmit(this.state);
    form.reset();
  };

  //   formReset = () => {
  //     this.setState({ name: '', number: '' });
  //   };

  render() {
    // const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <label className={css.label}>Name</label>
          <input
            className={css.name}
            onChange={this.inputChange}
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Enter your name"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            autocomplete="off"
            required
            autofocus="on"
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

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  inputChange: PropTypes.func,
};

import { Component } from 'react';
import styles from './ContactForm.module.css';
export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value.trim() });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    // console.log(`name: ${name}, number: ${number}`);
    this.props.onSubmit({ ...this.state, name, number });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' ][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onInput={this.handleInput}
            className={styles.input}
            placeholder="Name"
          />
          <input
            type="tel"
            name="number"
            value={number}
            pattern="(\(\d{3}\) \d{3}-\d{2}-\d{2}|\d{3} \d{3} \d{2} \d{2}|\d{5,12})"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onInput={this.handleInput}
            className={styles.input}
            placeholder="Number"
          />
          <button type="submit" className={styles.button}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

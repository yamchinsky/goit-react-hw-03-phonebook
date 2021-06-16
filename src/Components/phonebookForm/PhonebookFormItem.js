import React, { Component } from "react";
import PropTypes from "prop-types";
import { PhonebookItemStyled } from "./PhonebookFormItemStyled";

class PhonebookFormItem extends Component {
  state = {
    name: "",
    number: "",
  };

  handleNameChange = (evt) => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
    const nameValue = this.setState({ [name]: value });

    return nameValue;
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <div className="phonebook-container">
        <h2 className="phonebook-title">Phonebook</h2>
        <PhonebookItemStyled
          action=""
          className="form-input"
          onSubmit={this.handleSubmit}
        >
          <label className="filter-input">
            Name
            <br />
            <input
              onChange={this.handleNameChange}
              value={this.state.name}
              className="input"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="phonebook-filter"
              required
              id={this.id}
            />
          </label>

          <label className="phonebook-number">
            Number
            <br />
            <input
              onChange={this.handleNameChange}
              value={this.state.number}
              className="input"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              id={this.id}
            />
          </label>

          <button type="submit" className="add-contact-btn">
            Add contact
          </button>
        </PhonebookItemStyled>
      </div>
    );
  }
}

export default PhonebookFormItem;

PhonebookFormItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onSubmit: PropTypes.func.isRequired,
};

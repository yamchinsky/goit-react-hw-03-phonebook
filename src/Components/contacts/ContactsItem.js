import React from "react";
import PropTypes from "prop-types";
import { ContactsItemStyled } from "./ContactsItemStyled";


const ContactsItem = ({ name, number, onClickRemove }) => {
  return (
    <li className="contacts-item">
      <p>
        {name}: {number}
      </p>
      <button type="button" className="delete-button" onClick={onClickRemove}>
        Delete
      </button>
    </li>

    // <ul className="contacts-container">
    //   <ul className="contacts-list">
    //     {/* {contacts.map((contact) => (
    //       <li className="contacts-item" key={contact.id}>
    //         {contact.name}: {contact.number}
    //       </li>
    //     ))} */}
    //   </ul>
    // </ul>
  );
};

const ContactsList = ({ getVisibleContacts, onRemove }) => {
  return (
    getVisibleContacts.length > 0 && (
      <ContactsItemStyled>
        {getVisibleContacts.map(({ id, name, number }) => (
          <ContactsItem
            key={id}
            name={name}
            number={number}
            onClickRemove={() => onRemove(id)}
          />
        ))}
      </ContactsItemStyled>
    )
  );
};

export default ContactsList;

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClickRemove: PropTypes.func.isRequired,
};

ContactsList.propTypes = {
  getVisibleContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onRemove: PropTypes.func.isRequired,
};

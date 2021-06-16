import React, { Component } from "react";
import PhonebookFormItem from "./Components/phonebookForm/PhonebookFormItem";
import { v4 as uuidv4 } from "uuid";
import FilterItem from "./Components/filter/FilterItem";
import ContactsList from "./Components/contacts/ContactsItem";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    console.log("app did mount");

    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts && this.state.contacts.lenght > 0) {
      this.state({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("app update mount");

    if (this.state.contacts !== prevState.contacts) {
      console.log("обновилось contacts field");
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleRemove = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  // Отображение имени и телефона, после ввода данных в инпут
  formSubmithandler = (data) => {
    const { contacts } = this.state;
    const dublicateContact = contacts.find(
      (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (dublicateContact) {
      alert(`${dublicateContact.name} is already in contacts!`);
      return;
    }
    const newContact = { name: data.name, number: data.number, id: uuidv4() };
    this.setState((preState) => {
      return { contacts: [...preState.contacts, newContact] };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <PhonebookFormItem
          onSubmit={this.formSubmithandler}
          contacts={contacts}
        />
        <h2 className="contacts-title">Contacts</h2>
        <FilterItem value={filter} onChangeFilter={this.changeFilter} />
        <ContactsList
          getVisibleContacts={this.getVisibleContacts()}
          onRemove={this.handleRemove}
        />
      </>
    );
  }
}

export default App;

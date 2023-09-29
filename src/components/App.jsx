import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contactSelectors';
import { addContact, getFilteredContacts } from 'redux/contactsSlice';
import { useState } from 'react';

export const App = () => {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const existingNumber = contacts.find(
    contact => contact.number === newContact.number
  );
  if (existingContact) {
    alert(`Such name  already exists`);
    return;
  }
  if (existingNumber) {
    alert(`Such number already exists`);
    return;
  }

  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        {contacts.length ? (
          <ContactList contacts={getFilteredContacts()} />
        ) : (
          <p>No contacts</p>
        )}
      </Section>
    </div>
  );
};

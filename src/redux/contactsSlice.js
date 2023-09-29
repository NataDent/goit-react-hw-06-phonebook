import { nanoid } from 'nanoid';

export const contactsReducer = (
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  action
) => {
  switch (action.type) {
    case 'contacts/add':
      return {
        ...state,
        contacts: {
          id: nanoid(),
          ...action.payload,
        },
      };
    case 'contacts/delete':
      return {
        ...state,
        contacts: [...state].filter(contact => contact.id !== action.payload),
      };
    default:
      return state;
  }
};

export const addContact = newContact => {
  return {
    type: 'add',
    payload: newContact,
  };
};

export const deleteContact = contactId => {
  return {
    type: 'delete',
    payload: contactId,
  };
};
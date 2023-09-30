import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: [],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push({
          values: action.payload,
        });
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
    getFilteredContacts(state, action) {
      state.contacts = state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const { addContact, deleteContact, getFilteredContacts } =
  contactsSlice.actions;

export default contactsSlice.reducer;

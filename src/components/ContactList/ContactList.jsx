import { getContacts } from 'redux/contactSelectors';
import { Button, ContactListStyled, ListItem } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(action.payload.toLowerCase())
  );
  return (
    <ContactListStyled>
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <p>
            {name}: {number}
          </p>
          <Button type="button" onClick={() => dispatch(deleteContact({ id }))}>
            Delete
          </Button>
        </ListItem>
      ))}
    </ContactListStyled>
  );
};

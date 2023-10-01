import { getContacts } from 'redux/contactSelectors';
import { Button, ContactListStyled, ListItem } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { setFilter } from 'redux/FilterSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.includes(setFilter())
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

import { getContacts, getFilter } from 'redux/contactSelectors';
import { Button, ContactListStyled, ListItem } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);

  const getFilteredContacts = () => {
    return contacts.filter(({ name }) => name.includes(filterValue));
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ContactListStyled>
      {contacts.map(({ id, name, number }) => (
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

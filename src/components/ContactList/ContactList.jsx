import { getContacts } from 'redux/contactSelectors';
import { ContactListStyled, ListItem } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  return (
    <ContactListStyled>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={() => dispatch(deleteContact({ id }))}>
            Delete
          </button>
        </ListItem>
      ))}
    </ContactListStyled>
  );
};

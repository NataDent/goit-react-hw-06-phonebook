import { ContactListStyled, ListItem } from './ContactList.styled';
import { useDispatch } from 'react-redux';

export const ContactList = ({ contacts, deleteContact }) => {
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

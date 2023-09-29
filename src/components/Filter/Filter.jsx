import { useDispatch } from 'react-redux';
import { FilterForm } from './Filter.styled';
import { getFilteredContacts } from 'redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <FilterForm>
      <label>Find contacts by name:</label>
      <input
        type="text"
        name="find"
        onChange={e => dispatch(getFilteredContacts(e.currentTarget.value))}
      />
    </FilterForm>
  );
};

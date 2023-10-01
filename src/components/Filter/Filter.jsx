import { useDispatch, useSelector } from 'react-redux';
import { FilterForm } from './Filter.styled';
import { getFilter } from 'redux/contactSelectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <FilterForm>
      <label>Find contacts by name:</label>
      <input
        type="text"
        name="find"
        onChange={() => dispatch(filter(action.payload))}
      />
    </FilterForm>
  );
};

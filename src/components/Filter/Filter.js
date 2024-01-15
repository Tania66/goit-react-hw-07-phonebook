import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/contacts/filterSlice';
import css from '../Style.module.css';
import { selectedFilter } from '../../redux/contacts/selectors';

export default function Filter() {
  const filter = useSelector(selectedFilter);
  const dispatch = useDispatch();

  const filteredContact = event => {
    dispatch(filterContact(event.target.value.toLowerCase()));
  };

  return (
    <label className={css.filter}>
      Find contacts by name:
      <input
        type="text"
        value={filter}
        onChange={filteredContact}
        className={css.inputFilter}
      ></input>
    </label>
  );
}

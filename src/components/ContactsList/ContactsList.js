import { useDispatch, useSelector } from 'react-redux';
import { deletedContact } from '../../redux/contacts/contactsOperations';
import css from '../Style.module.css';
import { selectFilterContact } from '../../redux/contacts/selectors';

export default function OldContactList() {
  const contacts = useSelector(selectFilterContact);
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deletedContact(contactId));
  };

  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li className={css.item} key={contact.id}>
          {contact.name} : {contact.number}
          <button
            className={css.btnDelete}
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

import { useState } from 'react';
import css from '../Style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsOperations';
import { getContact } from '../../redux/contacts/selectors';
import shortid from 'shortid';

export default function OldContactForm() {
  const contacts = useSelector(getContact);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleAddContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    const saveContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (saveContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    const saveNumber = contacts.some(contact => contact.number === number);

    if (saveNumber) {
      alert(`${number} is already in contacts`);
      return;
    }

    dispatch(addContact(contact));
  };

  const handleChangeName = event => {
    setName(event.target.value);
  };

  const handleChangeNumber = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setName('');
    setNumber('');
    handleAddContact(name, number);
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor={nameInputId} className={css.label}>
        Name
        <input
          className={css.input}
          value={name}
          type="text"
          required
          id={nameInputId}
          onChange={handleChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
      </label>
      <label htmlFor={numberInputId} className={css.label}>
        Number
        <input
          className={css.input}
          value={number}
          required
          type="number"
          onChange={handleChangeNumber}
          id={numberInputId}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        />
      </label>

      <button type="submit" className={css.btnSubmit}>
        Add contact
      </button>
    </form>
  );
}

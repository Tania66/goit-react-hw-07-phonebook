import OldContactForm from './ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import OldContactList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import css from './Style.module.css'
import { getContact } from '../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/contactsOperations';

export const App = () => {

  const contacts = useSelector(getContact);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  

  return (

<div className={css.inner}>
 <h1 className={css.title}>Phonebook</h1>
    <OldContactForm />

  <h2 className={css.title}>Contacts</h2>
  <Filter />  

  {contacts.length > 0 && <OldContactList />}

</div>




  );
};

import { fetchContacts } from "./redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { Filter } from "./components/Filter/Filter";
import { ContactList } from "./components/ContactList/ContactList";
import { getContacts } from "./redux/selectors";
import css from "./App.module.css";

export const App = () => {
  const dispatch = useDispatch();
  console.log(`dispatch: ${dispatch}`);
  const { contacts, isLoading, error } = useSelector(fetchContacts);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
      <hr></hr>
      {isLoading && <h3>Pobieram dane...</h3>}
      {error && <p>{error}</p>}
      {/* NOTE: WTF??? */}
      <p>{contacts.length > 0 && JSON.stringify(contacts, null, 2)}</p> WTF
    </>
  );
};

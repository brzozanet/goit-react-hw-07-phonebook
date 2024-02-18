import { fetchContacts } from "./redux/operations";
import { useDispatch } from "react-redux";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { Filter } from "./components/Filter/Filter";
import { ContactList } from "./components/ContactList/ContactList";
import css from "./App.module.css";
import { useEffect } from "react";

export const App = () => {
  const dispatch = useDispatch();
  const { contacts, isLoading, error } = useSelector(fetchContacts);

  useEffect(() => {
    dispatch(getContacts());
  });

  return (
    <>
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};

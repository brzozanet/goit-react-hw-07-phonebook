import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/operations";

export const ContactList = () => {
  const contacts = useSelector((state) => {
    return state.contacts.contacts;
  });

  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = (id) => dispatch(deleteContact(id));

  return (
    <>
      <ul>
        {visibleContacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.phone}{" "}
            <button onClick={() => handleDeleteContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

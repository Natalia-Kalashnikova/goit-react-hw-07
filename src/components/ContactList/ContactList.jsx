import { useSelector } from "react-redux";

import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"


const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

    return (
        <ul className={css.item}>
            {visibleContacts.map((contact) => (
                <li className={css.item} key={contact.id}>
                    <Contact contact={contact} />
                </li>
            ))}           
        </ul>
    );
}

export default ContactList;
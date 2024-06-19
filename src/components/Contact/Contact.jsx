import { useDispatch } from 'react-redux';
import { FaUser, FaPhone } from "react-icons/fa6";

import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';


const Contact = ({ contact: { id, name, number } }) =>{
  const dispatch = useDispatch();

  const onDelete = () => dispatch(deleteContact(id));

  return (
      <div className={css.container}>
        <div className={css.text}>
          <p><FaUser className={css.icon} />&nbsp; {name}</p>
          <p><FaPhone className={css.icon} />&nbsp; {number}</p>
        </div>
        <button onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    );
}

export default Contact;
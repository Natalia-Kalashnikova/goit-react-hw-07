import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchContacts } from "../../redux/contactsOps";
import { selectLoading, selectError } from '../../redux/contactsSlice';

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import css from "./App.module.css"


function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

      return (
      <div className={css.container}>
          <h1>Phonebook</h1>        
        <ContactForm />
          <SearchBox />
          {isLoading && <Loader />}
          {isError && <ErrorMessage />}        
          <div className={css.contactListWrapper}>
            <ContactList />
          </div>
      </div>
    );
}


export default App;
import { useEffect } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import DocumentTitle from "../components/DocumentTitle";
// import Loader from "../components/Loader/Loader";
import SearchBox from "../components/SearchBox/SearchBox";
import { fetchContacts } from "../redux/contacts/operations";
import ContactList from "../components/ContactList/ContactList";
import { useDispatch } from 'react-redux';
// import { selectError, selectIsLoading } from '../redux/contacts/selectors';

const styles = {
  container: {
    height: '100vh',
    paddingTop: '110px',
    paddingRight: '40px',
    paddingLeft: '40px',
    backgroundColor: '##70DBCD',
    },
    formWrap: {
        display: 'flex',
        marginBottom: '50px',
    }
};

export default function Contacts() {
  const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={styles.container}>
      <DocumentTitle>Phonebook</DocumentTitle>
      <div style={styles.formWrap}>
        <ContactForm />
        <SearchBox />
      </div>
      {/* {isLoading && !error && <Loader />}
      {error && (
        <b>
          There is a problem with the connection to the server, please try again
          later
        </b>
      )} */}
      <ContactList />
    </div>
  );
}
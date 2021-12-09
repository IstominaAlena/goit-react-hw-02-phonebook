// import PropTypes from "prop-types"
// import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteItem }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={() => onDeleteItem(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

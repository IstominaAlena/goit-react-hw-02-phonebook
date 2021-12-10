import PropTypes from 'prop-types';
// import styles from './ContactList.module.css';

import Button from '../../shared/components/Button';

const ContactList = ({ contacts, onDeleteItem }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>

          <Button type="button" text="Delete" onClick={() => onDeleteItem(id)} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteItem: PropTypes.func.isRequired,
};

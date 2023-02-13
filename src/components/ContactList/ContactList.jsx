import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <>
      <div>
        <ul className={css.contactList}>
          {contacts.map((contact, id) => (
            <li key={id} className={css.contactItem}>
              <span className={css.contactInfo}>{contact.name}:</span>
              <span className={css.contactInfo}>{contact.number}</span>
              <button
                type="button"
                className={css.btnItemDel}
                onClick={() => handleDelete(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleDelete: PropTypes.func,
};

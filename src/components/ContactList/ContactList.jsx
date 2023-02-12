import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <>
      <div>
        <ul className={css.contactList}>
          {contacts.map((contact, id) => (
            <li key={id} className={css.contactItem}>
              <span>{contact.name}:</span>
              <span>{contact.number}</span>
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

        {/* <ul className={css.contactList}>
          {contacts.map((contact, id) => (
            <li key={id} className={css.contactItem}>
              {contact.name}:{contact.number}
              <button
                type="button"
                className={css.btnItemDel}
                onClick={() => handleDelete(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul> */}
      </div>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
  handleDelete: PropTypes.func,
};

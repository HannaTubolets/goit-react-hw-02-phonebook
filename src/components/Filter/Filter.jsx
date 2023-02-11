import propTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, inputChange }) => {
  return (
    <div className={css.filterWrapper}>
      <label className={css.filterLabel}>Find contacts by Name</label>
      <input
        className={css.filterName}
        type="text"
        name="filter"
        placeholder="Enter filtrer"
        value={filter}
        onChange={inputChange}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  inputChange: propTypes.func,
};

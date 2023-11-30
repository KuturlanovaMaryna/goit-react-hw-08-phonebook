import css from './Search.module.css';
import { filterContact } from 'redux/phone.reduser';
import { useDispatch } from 'react-redux';

const Search = () => {
  const dispatch = useDispatch();

  return (
    <input
      className={css.searcher}
      onChange={e => dispatch(filterContact(e.target.value))}
    />
  );
};

export default Search;

import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { FcSearch } from 'react-icons/fc';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleSearch = evt => {
    const value = evt.target.value;
    dispatch(changeFilter(value));
  };

  return (
    <div className={css.searchWrapper}>
      <p className={css.searchText}>Search by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleSearch}
        placeholder="Enter name or number..."
      />
      <span className={css.icon}>
        <FcSearch />
      </span>
    </div>
  );
};

export default SearchBox;
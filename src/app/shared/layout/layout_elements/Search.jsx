import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchData, unsetSearchData } from '../../../../redux/actions-creators';
import SearchIcon from '../../../../assets/icons/SearchIcon';
import CrossIcon from '../../../../assets/icons/CrossIcon';
import styles from '../Layout.module.scss';

const Search = () => {
  const [searched, setSearched] = useState(false);
  const inputRef = useRef();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.all_data);

  const searchData = (searchString) => {
    if (searchString) {
      const searchedData = data.filter((elem) => {
        return JSON.stringify(elem).search(new RegExp(searchString, 'i')) > -1 ? elem : false;
      });
      setSearched(true);
      dispatch(setSearchData(searchedData));
    }
  };

  const validateString = (s) => {
    let validationRegEx = /^[\s\w|\-|_.]+$/;
    if (validationRegEx.test(s) && s.length > 2 && s.length < 30) {
      searchData(s);
    }
  };

  const handleChange = (e) => {
    validateString(e.target.value);
    if (e.target.value === '') {
      inputRef.current.value = '';
      dispatch(setSearchData(data));
    }
  };

  const removeSearchedData = () => {
    dispatch(unsetSearchData());
    setSearched(false);
    inputRef.current.value = '';
  };

  return (
    <div className={styles.layout__search}>
      <input
        className={styles.layout__input}
        type="text"
        placeholder="Search"
        ref={inputRef}
        onChange={handleChange}
      />
      {searched ? (
        <CrossIcon className={styles.layout__icon} onClick={() => removeSearchedData()} />
      ) : (
        <SearchIcon className={styles.layout__icon} />
      )}
    </div>
  );
};

export default Search;

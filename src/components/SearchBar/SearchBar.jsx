import React from 'react';


const SearchBar = (props) => {
  const {searchCards} = props;
  return (
    <div className="searchBar">
    <h2>Search by</h2>
    <select id="searchSelector"> 
      <option value="name">name</option>
      <option value="role">role</option>
    </select>
    <input onInput={searchCards} id="searchEmployees" type="text" />
  </div>
  )
}

export default SearchBar;
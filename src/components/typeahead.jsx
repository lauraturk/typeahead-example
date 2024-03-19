import React, { useState } from "react";

import Button from "./button";

import "../styles/typeahead.css";

const StyledWord = ({ str, i, length }) => {
  return (
    <p>
      {str.substring(i, -1)}
      <em className="suggest--highlight">
        {str.substring(i, i + length)}
      </em>
      {str.substring(i + length)}
    </p>
  );
};

const TypeAhead = ({
  data,
  placeholderText = "First name",
  ctaText = "Search",
}) => {
  const [suggestList, setSuggestList] = useState([]);
  const [search, setSearch] = useState("");
  const [activeList, setActiveList] = useState(false);

  const handleSearchSuggest = ({ target }) => {
    setSearch(target.value);
    
    const suggestions = data.reduce((list, s, i) => {
      const matchIndex = s.toLowerCase().indexOf(target.value.toLowerCase());
      if (target.value && matchIndex !== -1) {
        list.push(
          <li key={i} role="option" id={`suggest-item-${0}`}>
            <StyledWord str={s} i={matchIndex} length={target.value.length} />
          </li>
        );
      }
      return list;
    }, []);
    
    if (suggestions.length) {
      setActiveList(true)
      setSuggestList(suggestions);
    } else {
      setActiveList(false)
      setSuggestList([])
    }
  };

  return (
    <div className="typeahead--wrapper">
      <form className="form--wrapper" role="search">
        <input
          onChange={(e) => handleSearchSuggest(e)}
          placeholder={placeholderText}
          name="search"
          role="search"
          aria-label="search"
          className={`form--input ${
            activeList ? `form--input-active` : ""
          }`}
          value={search}
        />
        <Button text={ctaText} disabled={!activeList} />
      </form>
      <ul
        tabIndex="0"
        role="listbox"
        aria-activedescendant="suggest-item-0"
        aria-hidden={!activeList}
        className={`suggest--wrapper ${
          !activeList ? `suggest--wrapper-empty` : ""
        }`}
      >
        {activeList ? suggestList : null}
      </ul>
    </div>
  );
};

export default TypeAhead;

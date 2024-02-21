import React, { useState } from "react";

import Button from "./button";

import "../styles/typeahead.css";

const StyledWord = ({ str, i, length }) => {
  return (
    <p>
      {str.substring(i, -1)}
      <span className="typeahead--suggest-highlight">
        {str.substring(i, i + length)}
      </span>
      {str.substring(i + length)}
    </p>
  );
};

const TypeAhead = ({ data, placeholderText = "First name", ctaText }) => {
  const [suggestList, setSuggestList] = useState("");
  const [search, setSearch] = useState("");

  const handleSearchSuggest = ({ target }) => {
    setSearch(target.value);
    const suggestions = data.reduce((list, s) => {
      const matchIndex = s.toLowerCase().indexOf(target.value);
      if (target.value && matchIndex !== -1) {
        list.push(
          <li role="option" id={`suggest-item-${list.length}`}>
            <StyledWord str={s} i={matchIndex} length={target.value.length} />
          </li>
        );
      }
      return list;
    }, []);
    setSuggestList(suggestions);
  };

  return (
    <form className="form--wrapper">
      <div className="typeahead--wrapper">
        <input
          onChange={(e) => handleSearchSuggest(e)}
          placeholder={placeholderText}
          name="search"
          role="search"
          className={`typeahead--input ${
            suggestList.length ? `typeahead--input-active` : ""
          }`}
          value={search}
        />
        {suggestList.length > 0 ? (
          <ul
            tabIndex="0"
            role="listbox"
            aria-activedescendant="suggest-item-0"
            className="typeahead--suggest-wrapper"
          >
            {suggestList}
          </ul>
        ) : null}
      </div>
      <Button text={ctaText} />
    </form>
  );
};

export default TypeAhead;

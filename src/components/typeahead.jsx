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

const TypeAhead = ({
  data,
  placeholderText = "First name",
  ctaText = "Search",
}) => {
  const [suggestList, setSuggestList] = useState("");
  const [search, setSearch] = useState("");

  const handleSearchSuggest = ({ target }) => {
    setSearch(target.value);
    const suggestions = data.map((s) => {
      const i = s.toLowerCase().indexOf(target.value);
      if (target.value && i !== -1) {
        return (
          <li key={i}>
            <StyledWord str={s} i={i} length={target.value.length} />
          </li>
        );
      }
      return;
    });
    setSuggestList(suggestions);
  };

  return (
    <>
      <form className="form--wrapper" role="search">
        <input
          onChange={(e) => handleSearchSuggest(e)}
          placeholder={placeholderText}
          name="search"
          role="search"
          aria-label="search"
          className={`typeahead--input ${
            suggestList.length ? `typeahead--input-active` : ""
          }`}
          value={search}
        />
        <Button data-testid="submitBtn" text={ctaText} />
      </form>
      <ul
        className="typeahead--wrapper"
        tabIndex="0"
        role="listbox"
        aria-activedescendant="suggest-item-0"
        aria-hidden={suggestList.length ? "false" : "true"}
        className={`typeahead--suggest-wrapper ${
          !suggestList.length ? `typeahead--suggest-wrapper-empty` : ""
        }`}
      >
        {suggestList.length > 0 ? suggestList : null}
      </ul>
    </>
  );
};

export default TypeAhead;

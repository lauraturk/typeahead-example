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
          <li>
            <StyledWord str={s} i={i} length={target.value.length} />
          </li>
        );
      }
      return;
    });
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
        <ul
          tabIndex="0"
          role="listbox"
          aria-activedescendant="suggest-item-0"
          aria-hidden={suggestList.length ? "false" : "true"}
          className={`typeahead--suggest-wrapper ${
            !suggestList.length ? `typeahead--suggest-wrapper-empty` : ""
          }`}
          data-testid="suggestList"
        >
          {suggestList.length > 0 ? suggestList : null}
        </ul>
      </div>
      <Button data-testid="submitBtn" text={ctaText} />
    </form>
  );
};

export default TypeAhead;

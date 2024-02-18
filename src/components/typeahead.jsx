import React, { useState } from "react";

import Button from "./button";

import "../styles/typeahead.css";

const StyledWord = ({ str, i, length }) => {
  return (
    <p>
      {str.substring(i, -1)}
      <span className="typeahead--suggest-highlight">{str.substring(i, i + length)}</span>
      {str.substring(i + length)}
    </p>
  );
};

const TypeAhead = ({ data, placeholderText = "First name", ctaText }) => {
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
    <div className="typeahead--wrapper">
      <input
        onChange={(e) => handleSearchSuggest(e)}
        placeholder={placeholderText}
        name="search"
        role="search"
        className="typeahead--input"
        value={search}
      />
      {suggestList.length ? (
        <ul className="typeahead--suggest-wrapper">{suggestList}</ul>
      ) : null}
      <Button text={ctaText} />
    </div>
  );
};

export default TypeAhead;

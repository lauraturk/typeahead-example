import React, { useState, useRef } from "react";

import Button from "./button";
import { SearchItem } from "./SearchItem";

import "../styles/typeahead.css";

const TypeAhead = ({
  data,
  placeholderText = "First name",
  ctaText = "Search",
}) => {
  const [suggestList, setSuggestList] = useState([]);
  const [search, setSearch] = useState("");
  const [activeList, setActiveList] = useState(false);

  const resetAll = () => {
    setSuggestList([]);
    setSearch("")
    setActiveList(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Great choice! Hang tight, we're looking for ${search}!`)
    resetAll()
  };

  const handleSearchSuggest = ({ target }) => {
    setSearch(target.value);

    const suggestions = data.reduce((list, name, i) => {
      const matchIndex = name.toLowerCase().indexOf(target.value.toLowerCase());
      if (target.value && matchIndex !== -1) {
        const newIndex = list.length;
        list.push(
          <SearchItem
            key={i}
            i={newIndex}
            str={name}
            matchIndex={matchIndex}
            matchLength={target.value.length}
            handleSelect={handleSelect}
          />
        );
      }
      return list;
    }, []);

    if (suggestions.length) {
      setActiveList(true);
      setSuggestList(suggestions);
    } else {
      setActiveList(false);
      setSuggestList([]);
    }
  };

  const handleSelect = (str) => {
    if (str) setSearch(str);
    return;
  };

  return (
    <div className="typeahead--wrapper">
      <form className="form--wrapper" type="search" onSubmit={handleSubmit}>
        <input
          role="combobox"
          onChange={(e) => handleSearchSuggest(e)}
          placeholder={placeholderText}
          aria-label="User search"
          className={`form--input ${activeList ? `form--input-active` : ""}`}
          value={search}
          type="text"
          aria-expanded={activeList}
          aria-controls="suggest-popup"
          aria-autocomplete="both"
        />
<<<<<<< Updated upstream
        <ul
          id="suggest-popup"
          aria-label="User search suggestions"
          tabIndex={activeList ? 0 : undefined}
          role="listbox"
          aria-activedescendant="suggest-item-0"
          aria-hidden={!activeList}
          className={`suggest--wrapper ${
            !activeList ? `suggest--wrapper-empty` : ""
          }`}
        >
          {activeList ? suggestList : null}
        </ul>
        <Button text={ctaText} disabled={!activeList} />
      </form>
    </div>
=======
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
      <Button data-testid="submitBtn" text={ctaText} />
    </form>
>>>>>>> Stashed changes
  );
};

export default TypeAhead;

import React from "react";

const StyledWord = ({ str, i, length }) => {
  return (
    <span>
      {str.substring(i, -1)}
      <em className="suggest--item-highlight">
        {str.substring(i, i + length)}
      </em>
      {str.substring(i + length)}
    </span>
  );
};

export const SearchItem = ({i, str, matchIndex, matchLength, handleSelect}) => {
  return (
    <li
      id={`suggest-item-${i}`}
      className="suggest--item"
      aria-label={str}
      role="option"
      onClick={() => handleSelect(str)}
      value={str}
    >
      <StyledWord str={str} i={matchIndex} length={matchLength} />
    </li>
  );
};


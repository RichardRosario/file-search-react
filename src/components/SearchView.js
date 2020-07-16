import React, { useState, useEffect, useRef } from "react";

const SearchView = ({ onSearch }) => {
  // declare a state to store user typed input
  const [input, setInput] = useState("");
  // add ref using useRef Hook to focus
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onInputChange = (event) => {
    const input = event.target.value;
    setInput(input);
    onSearch(input);
  };

  return (
    <div className="search-box">
      My Repository <span className="slash">/</span>
      <input
        type="text"
        name="text"
        value={input}
        ref={inputRef}
        autoComplete="off"
        onChange={onInputChange}
      />
    </div>
  );
};

export default SearchView;

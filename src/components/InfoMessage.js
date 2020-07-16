import React from "react";

const InfoMessage = () => {
  return (
    <div className="info-message">
      Press 't' to activate <em>file search</em>. Start typing to filter the
      file list. Use <span className="navigation">↑</span> and{" "}
      <span className="navigation">↓</span> to navigate,{" "}
      <span className="navigation">esc</span> to exit.
    </div>
  );
};

export default InfoMessage;

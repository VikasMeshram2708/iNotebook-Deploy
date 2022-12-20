import React from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const state = {
    name: "vikas mesrham",
  };
  return (
    <NoteContext.Provider value={state}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;

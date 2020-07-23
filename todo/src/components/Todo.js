import React, { useState, useReducer } from "react";

import {
  titleReducer,
  initialTitleState,
  TOGGLE_EDITING
} from "../reducers/index";

const Title = () => {
  // const [title, setTitle] = useState("Hello earthlings!");
  // const [editing, setEditing] = useState(false);
  const [newTitleText, setNewTitleText] = useState("");
  const [state, dispatch] = useReducer(titleReducer, initialTitleState);

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  // breakout:
  //   * implement a SET_TITLE action that sets the title.
  //   * the action for SET_TITLE will use the 'payload' key for the new title
  //   * in your reducer, act on SET_TITLE and update the state appropriately

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.title}{" "}
          <i
            onClick={() => dispatch({ type: TOGGLE_EDITING })}
            className="far fa-edit"
          />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              // setTitle(newTitleText);
              // setEditing(false);
              dispatch({ type: "SET_TITLE", payload: newTitleText });
            }}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Title;

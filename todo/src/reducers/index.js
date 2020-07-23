// pure functions :
//    * functions that return the same values for
//      the same inputs.
//    * does not cause side effects.

// reducer :
//    * pure function
//    * takes in two parameter, returns one
//    * useReducer reducer
//       * the first parameter is a state object
//       * the second parameter is an action object

// action :
//    * object that has:
//        * a required 'type' key
//        * an optional 'payload' key
export const TOGGLE_EDITING = "TOGGLE_EDITING";

export const initialTitleState = {
  title: "Todo List",
  editing: false
};

export const titleReducer = (state, action) => {
  // if (action.type === "TOGGLE_EDITING") {
  //   return {
  //     ...state,
  //     editing: !state.editing
  //   };
  // }
  // return state;
  switch (action.type) {
    case TOGGLE_EDITING:
      return {
        ...state,
        editing: !state.editing
      };
    case "SET_TITLE":
      return {
        ...state,
        title: action.payload,
        editing: false
      };
    default:
      return state;
  }
};
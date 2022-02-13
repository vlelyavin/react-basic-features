export const postReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST": {
      return [action.payload, ...state];
    }
    default:
  }
};

export const initialState = {user: {name: "", grower: false, cart: []}, produce: []};

export const reducer = (state=initialState, action) => {
  switch(action.type) {
    case "LOGIN_SUCCESS":
      return {...state, user: action.payload};
    case "LOGIN_FAILURE":
      return state;
    case "ADD_TO_CART":
      return {}
    default:
      return state;
  }
}

// USER MODELS 
/*
user = {
  username:,
  id:,
  grower: true/false,
  inventory: null/[],
  cart: []
}
*/
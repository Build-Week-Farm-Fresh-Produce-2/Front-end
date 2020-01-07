export const initialState = {user: {name: "", grower: false, cart: []}, produce: []};

export const reducer = (state=initialState, action) => {
  switch(action.type) {
    "LOGIN_SUCCESS":
      return {...state, user: action.payload};
    "LOGIN_FAILURE":
      return state;
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
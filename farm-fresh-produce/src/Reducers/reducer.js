export const initialState = {user: {name: "", grower: false, cart: []}, produce: [{name: "lemon", id: 0}]};

export const reducer = (state=initialState, action) => {
  switch(action.type) {
    case "LOGIN_SUCCESS":
      return {...state, user: action.payload};
    case "LOGIN_FAILURE":
      return state;
    case "GET_PRODUCE":
      return {...state, produce: action.payload};
    case "ADD_TO_CART":
      return {...state, user: {...state.user, cart: [...state.user.cart, action.payload]}};
    case "REMOVE_FROM_CART":
      return {...state, user: {...state.user, cart: state.cart.filter(item => item.id !== action.payload)}};
    case "ADD_TO_INVENTORY":
      return {...state, user: {...state.user, inventory: [...state.user.inventory, action.payload]}};
    case "REMOVE_FROM_INVENTORY":
      return {...state, user: {...state.user, inventory: state.user.inventory.filter(item => item.id !== action.payload)}};
    case "UPDATE_INVENTORY":
      return state; // .map, checking item.id, return item unless item.id === payload.id
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
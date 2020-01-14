export const initialState = {uid: 0, user: {username: "", isGrower: true}, cart: [], inventory: [], produce: [{name: "lemon", id: 0}], isEditing: false, itemToEdit: {}};

export const reducer = (state=initialState, action) => {
  switch(action.type) {
    case "LOGIN_SUCCESS":
      return {...state, uid: action.payload};
    case "LOGIN_FAILURE":
      return state;
    case "GET_PRODUCE":
      return {...state, produce: action.payload};
    case "GET_CART":
      return {...state, cart: action.payload};
    case "ADD_TO_CART":
      return {...state, cart: [...state.cart, action.payload]};
    case "REMOVE_FROM_CART":
      return {...state, user: {...state.user, cart: state.cart.filter(item => item.id !== action.payload)}};
    case "GET_INVENTORY":
      return {...state, inventory: action.payload};
    case "ADD_TO_INVENTORY":
      return {...state, user: {...state.user, inventory: [...state.inventory, action.payload]}};
    case "REMOVE_FROM_INVENTORY":
      return {...state, user: {...state.user, inventory: state.user.inventory.filter(item => item.id !== action.payload)}};
    case "EDIT_ITEM":
      return {...state, isEditing: true, itemToEdit: action.payload};
    case "UPDATE_INVENTORY":
      return {...state, isEditing: false, itemToEdit: {}}; // .map, checking item.id, return item unless item.id === payload.id
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
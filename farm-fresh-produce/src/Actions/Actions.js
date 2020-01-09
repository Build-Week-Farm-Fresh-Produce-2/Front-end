import { axiosWithAuth } from "../Utils/axiosWithAuth";

//All or most actions needed for app
//actions needed - get info, login and logout, add to cart, remove from cart, get farm info, get produce
// const LOGIN_SUCCESS = "LOGIN_SUCCESS";
// const LOGIN_FAILURE = "LOGIN_FAILURE";
const GET_PRODUCE = "GET_PRODUCE";
const GET_CART = "GET_CART";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
// const ADD_TO_INVENTORY = "ADD_TO_INVENTORY";
// const REMOVE_FROM_INVENTORY = "REMOVE_FROM_INVENTORY";
// const UPDATE_INVENTORY = "UPDATE_INVENTORY";

// export const userInfo = () => dispatch => {
//   const getUserInfo =
//     localStorage.getItem("grower") === "true"
//       ? "/api/growers"
//       : "/api/buyer";
//   axiosWithAuth()
//     .get(getUserInfo + localStorage.getItem("id"))
//     .then(res => {
//       console.log("cj: getting user profile", res.data);
//       dispatch({
//         type: USER_INFO,
//         payload: res.data
//       });
//       return true;
//     })
//     .catch(err => {
//       console.log("cj: user error", err);
//       return false;
//     });
// };

// export const login = state => dispatch =>{
//     dispatch({type: LOGIN_INIT});
//     const logLink = state.grower ? './api/authorize/grower/login':'./api/authorize/buyer/login';
//     axiosWithAuth().post(logLink, state.credentials)
//     .then(res=>{
//         localStorage.setItem('token', res.data.token);
//         // localStorage.setItem('isGrower', state.grower);
//         // localStorage.setItem('user ID', res.data.user.id);
//         dispatch({
//             type: LOGIN_SUCCESS,
//             payload:res.data
//         })
//     })
//     .catch(err=>{
//         console.log ('cj: login failure', err),
//         dispatch({
//             type: LOGIN_FAILURE,
//             payload: err
//         })
//     })
// }

export const getProduce = (produce) => dispatch => {
  // TODO: axiosWithAuth.get
  // All of the farmers! All of their Inventories! 
  dispatch({
    type: GET_PRODUCE,
    payload: produce
  })
}

export const getCart = (uid) => dispatch => {
  axiosWithAuth()
    .get(`/users/${uid}/cart`)
    .then(res => {
      console.log("Getting Cart", res)
      dispatch({
        type: GET_CART,
        payload: res.data.cart
      })
    })
}

export const addToCart = (item) => dispatch =>{
  // TODO: axiosWithAuth.post
  dispatch({
    type: ADD_TO_CART,
    payload: item
  });
};

export const removeCart = (id) => dispatch =>{
  // TODO: axiosWithAuth.delete
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id
  });
}
import { axiosWithAuth } from "../Utils/axiosWithAuth";

//All or most actions needed for app
//actions needed - handleChange, get info, login and logout, add to cart, remove from cart, get farm info, get produce

export const handleChange = e => {
  dispatchEvent({
    type: HANDLE_CHANGE,
    payload: {
      name: e.target.name,
      value: e.target.value
    }
  });
};

export const userInfo = () => dispatch => {
  const getUserInfo =
    localStorage.getItem("grower") === "true"
      ? "/api/growers"
      : "/api/buyer";
  axiosWithAuth()
    .get(getUserInfo + localStorage.getItem("id"))
    .then(res => {
      console.log("cj: getting user profile", res.data);
      dispatch({
        type: USER_INFO,
        payload: res.data
      });
      return true;
    })
    .catch(err => {
      console.log("cj: user error", err);
      return false;
    });
};

export const login = state=> dispatch=>{
    dispatch({type: LOGIN_INIT});
    const logLink = state.grower ? './api/authorize/grower/login':'./api/authorize/buyer/login';
    return axiosWithAuth().post(logLink, state.credentials)
    .then(res=>{
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('isGrower', state.grower);
        dispatch({
            type: LOGIN_USER,
            payload:{data: res.data, grower: state.grower}
        })
        return true
    })
    .catch(err=>{
        console.log ('cj: login failure', err),
        dispatch({
            type: LOGIN_FAILED,
            payload: err
        })
        return false
    })
}


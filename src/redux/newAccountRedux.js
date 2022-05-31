import axios from "axios";
import Swal from "sweetalert2";
import jwt_decode from "jwt-decode";

const Toast = Swal.mixin({
  toast: true,
  position: "center",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const ToastError = Swal.mixin({
  toast: true,
  position: "center",
  showConfirmButton: true,
  timer: 8000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

// Constants
const initData = {
  created: null,
};

// Types
const NEW_USER_REGISTER = "NEW_USER_REGISTER";

// Reducer
export default function myAccountReducer(state = initData, action) {
  switch (action.type) {
    case NEW_USER_REGISTER:
      return {
        ...state,
        created: action.userCreated,
      };
    default:
      return state;
  }
}

// Actions
export const registerNewAccount = (newUser) => async (dispatch) => {
  let status = 0;
  const body = JSON.stringify(newUser);
  const authBody = new URLSearchParams();
  authBody.append("username", newUser.username);
  authBody.append("password", newUser.password);
  authBody.append("grant_type", "password");
  dispatch({
    type: NEW_USER_REGISTER,
    userCreated: true,
  });
  try {
    await axios
      .post("/save", body, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        status = response.data.status;
        dispatch({
          type: NEW_USER_REGISTER,
          userCreated: response.data.created,
        });
      });
    if (status === 201) {
      dispatch({
        type: NEW_USER_REGISTER,
        userCreated: true,
      });
      await axios
        .post("/oauth/token", authBody, {
          headers: {
            Authorization: "Basic d2F2ZS1zdG9yZS1mcm9udGVuZC1hcHA6MTIzNDU=",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((userToken) => {
          localStorage.setItem(
            "user",
            JSON.stringify(jwt_decode(userToken.data.access_token))
          );
          dispatch({
            type: NEW_USER_REGISTER,
            userCreated: true,
          });
          Toast.fire({
            icon: "success",
            title: "New user created",
          }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
              window.location.href = "/";
            }
          });
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "User name already in use",
        text: "try with another name",
      });
    }
  } catch (error) {
    console.log(error);
    ToastError.fire({
      icon: "error",
      title: "Server disconnected",
      text: "Please try again later or contact to your technical support",
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer || result.isConfirmed) {
        window.location.href = "/";
      }
    });
  }
};

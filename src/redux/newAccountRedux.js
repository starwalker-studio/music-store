import axios from "axios";
import Swal from "sweetalert2";

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

// Constants
const initData = {
  response: [],
};

// Types
const NEW_ACCOUNT_REGISTER = "NEW_ACCOUNT_REGISTER";

// Reducer
export default function myAccountReducer(state = initData, action) {
  switch (action.type) {
    case NEW_ACCOUNT_REGISTER:
      return { ...state, response: action.account };
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
  try {
    await axios
      .post("/save", body, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        console.log(response.data);
        status = response.data.status;
      });
    if (status === 201) {
      console.log("works!");
      await axios
        .post("/oauth/token", authBody, {
          headers: {
            Authorization: "Basic d2F2ZS1zdG9yZS1mcm9udGVuZC1hcHA6MTIzNDU=",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((responseNewUser) => {
          console.log(responseNewUser.data.access_token);
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
  }
};

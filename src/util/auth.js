import firebase from "../config/firebase.js";

// export const loginHandler = (setLogin) => {};

export const logoutHandler = (setLogin) => {
  localStorage.removeItem("isLoggedIn");
  setLogin(false);
};

export const onChange = (event, setUser, user) => {
  setUser({ ...user, [event.target.name]: event.target.value });
};

export const onBlur = (event, validation, setValidation, user) => {
  let inpName = event.target.name;
  setValidation(
    inpName === "enteredEmail"
      ? { ...validation, email: !user.enteredEmail.includes("@") }
      : { ...validation, password: user.enteredPassword.length < 6 }
  );
};

export const submitHandler = (event, validation, setLogin, user, setUser) => {
  event.preventDefault();
  validation.form &&
    firebase
      .auth()
      .signInWithEmailAndPassword(user.enteredEmail, user.enteredPassword)
      .then((userCredential) => {
        // Signed in
        var fbuser = userCredential.user;
        console.log("user", fbuser);
        // onLogin(user.enteredEmail, user.enteredPassword);
        localStorage.setItem("isLoggedIn", 1);
        setLogin(true);
        setUser({ ...user, enteredEmail: "" });
        setUser({ ...user, enteredPassword: "" });
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
};

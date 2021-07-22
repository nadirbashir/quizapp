export const loginHandler = (setLogin) => {
  localStorage.setItem("isLoggedIn", 1);
  setLogin(true);
};

export const logoutHandler = (setLogin) => {
  localStorage.removeItem("isLoggedIn");
  setLogin(false);
};

export const onChange = (event,setUser,user) => {
    setUser({...user, [event.target.name]: event.target.value});
  }

  export const submitHandler = (event,validation, onLogin, user, setUser) =>{
    event.preventDefault();
    if(validation.form){
      onLogin(user.enteredEmail, user.enteredPassword);
      setUser({...user, enteredEmail: ""});
      setUser({...user, enteredPassword: ""});
    }
  };
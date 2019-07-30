const initValues = {
  Regdata: [],
  Logindata: []
};

const reducer = (state = initValues, action) => {
  console.log("actionData", action);

  switch (action.type) {
    case "REGISTER":
      return { ...state, Regdata: action.payload };
    case "LOGIN":
      return { ...state, Logindata: action.payload };

    default:
      return state;
  }
};

export default reducer;

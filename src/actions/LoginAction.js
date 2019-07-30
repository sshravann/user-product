

const getActionLoginData = (data, dispatch) => {
    console.log("getActionLoginData",data);
    dispatch({
        type: "LOGIN",
        payload: data
    })
};


export default getActionLoginData;


const getActionRegData = (data, dispatch) => {
    console.log("getActionRegData",data);
    dispatch({
        type: "REGISTER",
        payload: data
    })
};


export default getActionRegData;
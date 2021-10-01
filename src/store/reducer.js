const initState = { notificationList: [] };

const reducer = (state =  initState , action) => {
  switch (action.type) {
    case "SEND_NOTIFICATION":
      return {
        notificationList: [...state.notificationList, action.payload],
      };
    case "DELETE_NOTIFICATION":
      let id = action.payload;
      const modifiedList = state.notificationList.filter(
        (list) => list.id !== id
      );
      return {
        notificationList: [...modifiedList],
      };
    default:
      return state;
  }
};

export default reducer;

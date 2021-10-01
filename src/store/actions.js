export const sendNotification = (payload) => {
    return{
       type:"SEND_NOTIFICATION",
       payload
    }
}

export const deleteNotification = (payload) => {
    return {
        type:"DELETE_NOTIFICATION",
        payload
    }
}
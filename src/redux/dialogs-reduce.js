
let initialState = {
  dialogsData: [
    { name: 'Andrey', id: '/1', },
    { name: 'Dnitry', id: '/2', },
    { name: 'Sasha', id: '/3', },
    { name: 'Valera', id: '/4', },
    { name: 'Vira', id: '/5', },
  ],
  messagesData: [
    { message: "hi" },
    { message: "How are you" },
    { message: "I am fine" },
    { message: "blablalba" },
    { message: "yoyoyo" }
  ],
  messageTextDate: {
    texareaValue: ''
  }
}

export const addMessageActionCreatior = (getValueText) => {
  return {
    type: "ADD-MESSAGE",
    messageText: getValueText.current.value
  }
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-MESSAGE":
      let newMessage = { message: action.messageText }
      state.messagesData.push(newMessage);
      state.messageTextDate.texareaValue = '';
      return state
    default:
      return state
  }
};

export default dialogsReducer
const ADD_TEXT_POST = "ADD-TEXT-POST"

export const addPostActionCreatior = (getValueText) => {
  return {
    type: "ADD-POST",
    messagePost: getValueText.current.value
  }
}
export const updaeNewPost = (getValueText) => {
  return {
    type: "ADD-TEXT-POST",
    newPost: getValueText.current.value
  }
}


let initialState = {
  postData: [
    { id: 1, message: "Я тут ", likes: 1, },
    { id: 2, message: "Я тут ", likes: 1223, },
    { id: 3, message: "Я тут ", likes: 13, },
    { id: 4, message: "Я тут ", likes: 423, },

  ],
  showProfileText: {
    texareaValue: '',
  }

}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-POST":
      let newPost = { id: 5, message: action.messagePost + " ", likes: 234, };
      state.postData.push(newPost);
      state.showProfileText.texareaValue = '';
      return state
    case "ADD-TEXT-POST":
      state.showProfileText.texareaValue = action.newText;
      return state
    default:
      return state
  }

}


export default profileReducer



// const profileReducer = (state = initialState, action) => {
//   if (action.type === "ADD-POST") {
//     let newPost = { id: 5, message: action.messagePost + " ", likes: 234, };
//     state.postData.push(newPost);
//     state.showProfileText.texareaValue = '';

//   } else if (action.type === "ADD-TEXT-POST") {
//     state.showProfileText.texareaValue = action.newText;
//   }

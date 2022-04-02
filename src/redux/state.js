


let store = {
	_state: {
		dialogsPage: {
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
		},
		navBarPage: {
			links: [{
				to: "/profile",
				content: 'Profile',

			}, {
				to: "/dialogs",
				content: 'Message',

			}, {
				to: "/news",
				content: 'News',

			}, {
				to: "/music",
				content: 'Music',

			}, {
				to: "/users",
				content: 'Users',

			},
			{
				to: "/TrainingRedux",
				content: 'Training',

			},
			],
		},
		profilePage: {
			postData: [
				{ id: 1, message: "Я тут ", likes: 1, },
				{ id: 2, message: "Я тут ", likes: 1223, },
				{ id: 3, message: "Я тут ", likes: 13, },
				{ id: 4, message: "Я тут ", likes: 423, },

			],
			showProfileText: {
				texareaValue: '',
			}

		},

	},
	_renderEntireTree() {
		console.log("State change");
	},
	getState() {
		return this._state;
	},
	showMessageDialog(newText) {
		this._state.dialogsPage.messageTextDate.texareaValue = newText;
		this._renderEntireTree(this._state)
	},

	subscribe(observe) {
		this._renderEntireTree = observe;
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._renderEntireTree(this._state)
	},
}
export default store;











// export const updaeNewPost = (getValueText) => {
// 	return {
// 		type: "ADD-TEXT-POST",
// 		newPost: getValueText.current.value
// 	}
// }




////////////////////функція яка відображає текст в TEXAREA в profile//////////////////////////////////////

// export const addTextPost = (newText) => {
// 	state.profilePage.showProfileText.texareaValue = newText;
// 	renderEntireTree(state);
// }
////////////////////функція яка відображає текст в TEXAREA в profile//////////////////////////////////////

////////////////////функція яка відображає текст в TEXAREA в dialogs//////////////////////////////////////

// export let showMessageDialog = (newText) => {
// 	state.dialogsPage.messageTextDate.texareaValue = newText;
// 	renderEntireTree(state);
// }
////////////////////функція яка відображає текст в TEXAREA в dialogs//////////////////////////////////////

///////////////////функція яка добавляє елемент(обєкт в state) на екран /////////////////////////////////////

// export let addPost = (messagePost) => {
// 	let newPost = { id: 5, message: messagePost + " ", likes: 234, };
// 	state.profilePage.postData.push(newPost);
// 	state.profilePage.showProfileText.texareaValue = '';
// 	renderEntireTree(state);
// }
////////////////////функція яка добавляє елемент(обєкт в state) на екран /////////////////////////////////////

////////////////////визов функцціх яка буде оновлювати state//////////////////////////////////////
// export const subscribe = (observe) => {
// 		renderEntireTree = observe;
// 	}
////////////////////визов функцціх яка буде оновлювати state//////////////////////////////////////



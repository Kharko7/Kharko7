import { renderEntireTree } from "../render";



const state = {
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

};





export const addTextPost = (newText) => {
	state.profilePage.showProfileText.texareaValue = newText;
	renderEntireTree(state);
}

export let showMessageDialog = (newText) => {
	state.dialogsPage.messageTextDate.texareaValue = newText;
	renderEntireTree(state);
}


export let addPost = (messagePost) => {
	let newPost = { id: 5, message: messagePost + " ", likes: 234, };
	state.profilePage.postData.push(newPost);
	state.profilePage.showProfileText.texareaValue = '';
	renderEntireTree(state);
}



export default state;

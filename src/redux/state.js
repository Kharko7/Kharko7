
const state = {
	profilePage: {
		dialogsData: [
			{ name: 'Andrey', id: '/dialogs/1', },
			{ name: 'Dnitry', id: '/dialogs/2', },
			{ name: 'Sasha', id: '/dialogs/3', },
			{ name: 'Valera', id: '/dialogs/4', },
			{ name: 'Vira', id: '/dialogs/5', },
		],
		messagesData: [
			{ message: "hi" },
			{ message: "How are you" },
			{ message: "I am fine" },
			{ message: "blablalba" },
			{ message: "yoyoyo" }
		],
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
	}
};


export default state;
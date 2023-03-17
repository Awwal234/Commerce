import { createStore } from 'vuex';

export default createStore({
	state() {
		return {
			isAuthenticated: false,
			email: '',
			password: '',
			firstname: '',
			lastname: '',
		};
	},
	mutations: {
		registerUser() {
			// state.payload = payload;
			console.log('Hello');
		},
		loginUser(state) {
			state.isAuthenticated = true;
			localStorage.setItem('state', JSON.stringify(state));
		},
	},
});

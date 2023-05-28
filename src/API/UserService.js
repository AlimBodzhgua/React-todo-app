import axios from 'axios';

export default class UserService {
	static async getUser(token) {
		const response = await axios.get('http://localhost:8080/users', {token});
		return response.data;
	}

	static async updateUser(newUser) {
		axios.patch(`http://localhost:8080/users/${newUser.id}`, newUser);
	}
}
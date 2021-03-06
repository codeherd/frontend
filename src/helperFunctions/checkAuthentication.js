import jwtDecode from "jwt-decode";

export default async function checkAuthentication(baseUrl) {
	try {
		const token = localStorage.getItem("token");

		if (!token) {
			localStorage.removeItem("token");
			return null;
		}

		const { sub: id, exp: expiration } = jwtDecode(token);

		if (expiration > Date.now()) {
			console.log("expired token");
			localStorage.removeItem("token");
			return null;
		}

		return id;
	} catch (error) {
		console.log(error);

		localStorage.removeItem("token");
		return null;
	}
}

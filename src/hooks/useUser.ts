import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function useUser() {
	const [user] = useState(
		localStorage.getItem("user") ||
			(() => {
				let user = uuidv4();
				localStorage.setItem("user", user);
				return user;
			})
	);

	return user;
}

export default useUser;

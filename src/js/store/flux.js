const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: []
		},
		actions: {
			signUp: () => {
				const db = firebase.firestore;
				firebase
					.auth()
					.createUserWithEmailAndPassword(firstName, lastName, email, password)
					.then(userCredential => {
						// Signed in
						let user = userCredential.user;
						return db
							.collection("users")
							.doc(user)
							.set({
								firstName: firstName,
								lastName: lastName,
								id: user
							});
					})
					.catch(error => {
						let errorCode = error.code;
						let errorMessage = error.message;
						// ..
					});
			}
		}
	};
};

export default getState;

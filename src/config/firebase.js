import { initializeApp, applicationDefault, cert } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCW8XyFCso-tYTMu2uBekXqFw3os958X2E",
	authDomain: "next-hive-haven.firebaseapp.com",
	projectId: "next-hive-haven",
	storageBucket: "next-hive-haven.appspot.com",
	messagingSenderId: "192309780239",
	appId: "1:192309780239:web:d3c239327139561b8e287a",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = db.doc(`users/${userAuth.uid}`);

	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (err) {
			console.log(err);
		}
	}

	return userRef;
};

export const getCurrentUser = () =>
	new Promise((reseolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			unsubscribe();
			reseolve(userAuth);
		}, reject);
	});

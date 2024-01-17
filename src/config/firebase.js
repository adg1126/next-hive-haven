import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, OAuthProvider } from "firebase/auth";

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

export const microsoftProvider = new OAuthProvider("google.com");

export const signInWithMicrosoftAsync = async () => {
	const res = await signInWithPopup(auth, microsoftProvider);

	try {
		const credential = OAuthProvider.credentialFromResult(res);
		const { accessToken, idToken } = credential;

		return credential;
	} catch (err) {
		return err;
	}
};

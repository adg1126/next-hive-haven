import { call, put, all, takeEvery, takeLatest } from "redux-saga/effects";
import {
	googleProvider,
	createUserProfileDocument,
	getCurrentUser,
	signInWithGooglePopup,
} from "../../config/firebase";
import {
	GOOGLE_SIGN_IN_START,
	CHECK_USER_SESSION,
	SIGN_OUT_START,
} from "./userActionTypes";
import {
	signInSuccess,
	signInFailure,
	signOutSuccess,
	signOutFailure,
	signUpSuccess,
} from "./userActions";

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
	try {
		const userRef = yield call(
			createUserProfileDocument,
			userAuth,
			additionalData
		);
		const userSnapshot = yield userRef.get();

		yield console.log(userSnapshot);
		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
	} catch (err) {
		yield put(signInFailure(err.message));
	}
}

export function* signInWithGoogle() {
	try {
		const { user } = yield signInWithGooglePopup(googleProvider);
		yield getSnapshotFromUserAuth(user);
	} catch (err) {
		yield put(signInFailure(err.message));
	}
}

export function* onGoogleSignInStart() {
	yield takeEvery(GOOGLE_SIGN_IN_START, signInWithGoogle);
}
export function* isUserAuthenticated() {
	try {
		const userAuth = yield getCurrentUser();
		if (!userAuth) return;

		try {
			const userRef = yield call(createUserProfileDocument, userAuth);
			const userSnapshot = yield userRef.get();
			yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
		} catch (err) {
			yield put(signInFailure(err.message));
		}
	} catch (err) {
		yield put(signInFailure(err.message));
	}
}

export function* onCheckUserSession() {
	yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOut() {
	try {
		yield auth.signOut();
		yield put(signOutSuccess());
	} catch (err) {
		yield put(signOutFailure(err.message));
	}
}

export function* onSignOutStart() {
	yield takeLatest(SIGN_OUT_START, signOut);
}

export function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(onCheckUserSession),
		call(onSignOutStart),
	]);
}

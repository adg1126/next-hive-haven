import { takeLatest, put, all, call } from 'redux-saga/effects';
import {
  MICROSOFT_SIGN_IN_START,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
} from './userActionTypes';
import {
  auth,
  microsoftProvider,
  signInWithMicrosoftAsync,
  // createUserProfileDocument,
  // getCurrentUser,
} from '../../config/firebase';
import { signInWithPopup, OAuthProvider } from 'firebase/auth';
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
} from './userActions';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

export function* signInWithMicrosoft() {
  yield microsoftProvider.setCustomParameters({
    prompt: 'consent',
    tenant: '08195d68-0190-47b8-8344-b172f23ce9c5',
  });
  const res = yield signInWithPopup(auth, microsoftProvider);
  const credential = yield OAuthProvider.credentialFromResult(res);

  try {
    const { accessToken, idToken } = credential;

    yield console.log(credential);
    // yield getSnapshotFromUserAuth(user)
  } catch (err) {
    return err;
  }
  // try {
  //   // const user = yield signInWithMicrosoftAsync();
  //   // console.log(user);
  //   // const { user } = yield auth.signInWithPopup(googleProvider);
  //   // yield getSnapshotFromUserAuth(user);
  // } catch (err) {
  //   yield put(signInFailure(err.message));
  // }
}

export function* onMicrosoftSignInStart() {
  yield takeLatest(MICROSOFT_SIGN_IN_START, signInWithMicrosoft);
}

export function* onSignUpStart() {
  yield takeLatest(SIGN_UP_START, signUp);
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onSignUpSuccess() {
  yield takeLatest(SIGN_UP_SUCCESS, signInAfterSignUp);
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
    call(onMicrosoftSignInStart),
    // call(onCheckUserSession),
    // call(onSignOutStart),
    // call(onSignUpStart),
    // call(onSignUpSuccess),
  ]);
}

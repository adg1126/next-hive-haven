import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, OAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCyGN5LO-J23PUEV7yyvjOOwjAyahcimHM',
  authDomain: 'next-student-feedback.firebaseapp.com',
  projectId: 'next-student-feedback',
  storageBucket: 'next-student-feedback.appspot.com',
  messagingSenderId: '909976799198',
  appId: '1:909976799198:web:88472cf1fd17898bd5ff4f',
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const microsoftProvider = new OAuthProvider('microsoft.com');

// microsoftProvider.setCustomParameters({
//   prompt: 'consent',
//   tenant: '',
//   client_id: ' 6fc362f9-4db9-4992-8a5d-778e8d13bbfd',
//   response_type: '',
//   redirect_uri: 'https://next-student-feedback.firebaseapp.com/__/auth/handler',
//   scope: ['user.read'],
//   response_mode: '',
// });

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

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;

//   const userRef = db.doc(`users/${userAuth.uid}`);

//   const snapshot = await userRef.get();

//   if (!snapshot.exists) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();

//     try {
//       await userRef.set({
//         displayName,
//         email,
//         createdAt,
//         ...additionalData,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   return userRef;
// };
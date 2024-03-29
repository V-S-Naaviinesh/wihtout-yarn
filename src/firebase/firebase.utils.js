import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
        apiKey: "AIzaSyBg-P4TuqGAaVlxHG63Wwyvh6GKTgZCxsk",
        authDomain: "my-first-e-commerce-crown.firebaseapp.com",
        databaseURL: "https://my-first-e-commerce-crown.firebaseio.com",
        projectId: "my-first-e-commerce-crown",
        storageBucket: "my-first-e-commerce-crown.appspot.com",
        messagingSenderId: "955619817975",
        appId: "1:955619817975:web:fdbe4d22cc9601a37896f2",
        measurementId: "G-HB3RY7NXZH"
      };

export const createUserProfileDocument = async (userAuth , additionalData)  => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName , email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error){
        console.log('error creating user' , error.message);
    }
    
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
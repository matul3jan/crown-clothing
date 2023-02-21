import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDbq6hb6ErJPMMQoxxybSki5KODV9e1guo",
    authDomain: "crown-clothing-db-a78bc.firebaseapp.com",
    projectId: "crown-clothing-db-a78bc",
    storageBucket: "crown-clothing-db-a78bc.appspot.com",
    messagingSenderId: "915332865993",
    appId: "1:915332865993:web:92827fa0e21f19e40bd218"
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, { displayName, email, createdAt });
        } catch (error) {
            console.log("Error creating the user", error.message);
        }
    }
    return userDocRef;
}
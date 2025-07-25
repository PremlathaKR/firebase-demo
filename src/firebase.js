import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAx8SZ6OJA4fHx4AuCSWUTYrJgWRoWRZ74", authDomain: "...", projectId: "reactdemo-c68c5",
    storageBucket: "...", messagingSenderId: "...", appId: "...",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
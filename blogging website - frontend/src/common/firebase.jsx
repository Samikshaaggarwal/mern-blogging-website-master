import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDzLZpw_Xvl4B6laGsIs4NRPbNwTGHQatI",
  authDomain: "reactjs--blogging-website.firebaseapp.com",
  projectId: "reactjs--blogging-website",
  storageBucket: "reactjs--blogging-website.appspot.com",
  messagingSenderId: "701010800335",
  appId: "1:701010800335:web:c9932ae5874931b84e91ba"
};

const app = initializeApp(firebaseConfig);

//google auth

const provider = new GoogleAuthProvider();

const auth =getAuth();

export const authWithGoogle = async()=>{

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result)=>{
        user= result.user
    })
    .catch((err)=>{
        console.log(err);
    })

    return user;
}
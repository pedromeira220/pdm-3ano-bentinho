import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";

export const getLogin = async (email: string, password: string) => {

  return signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      return userCredential.user
    })


}


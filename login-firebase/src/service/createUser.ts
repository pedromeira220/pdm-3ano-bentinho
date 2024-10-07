import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";

export const createUser = async (email: string, password: string) => {
  
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      return userCredential.user
    })
}


import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";

interface CreateUserParams {
  email: string
  password: string
}

export const createUser = async ({email,password}: CreateUserParams) => {
  
  return createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      return userCredential.user
    })
}


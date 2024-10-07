import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";

interface GetLoginParams {
  email: string
  password: string
}

export const getLogin = async ({email,password}: GetLoginParams) => {

  return signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      return userCredential.user
    })


}


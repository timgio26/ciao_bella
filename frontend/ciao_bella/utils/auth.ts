import axios from "axios";
import { saveSecurely } from "./secureOp";
import {FIREBASE_API_KEY} from '../secret'

export async function createUser(
  mode: "signUp" | "signInWithPassword",
  email: string,
  password: string
): Promise<void> {

  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${FIREBASE_API_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
  const { email: responseEmail, idToken } = response.data as {
    email: string;
    idToken: string;
  };
  if (mode === "signInWithPassword") {
    saveSecurely("user", JSON.stringify({responseEmail,idToken}))
    // dispatch(signin(JSON.stringify({responseEmail,idToken})))
  }
}

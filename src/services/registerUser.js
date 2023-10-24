import { register } from "../apis/authentication.api";

export default async function registerUser(user) {
  console.log(user);
    return register('/signUp' ,user);
  }


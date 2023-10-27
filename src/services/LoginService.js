import { useNavigate } from "react-router-dom";
import { login } from "../apis/authentication.api";


export default async function loginUser(user) {
  console.log(user);
login("/login", user);

 
  
     

}

import axios from "axios";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://frontend-internship-api.atadp.com/api/v1/auth";

async function register(endpoint, data) {
  console.log("data:", data);
  const res = await axios.post(`${BASE_URL}${endpoint}`, data);
 
  const token = await res.data;
  
  setTokenInLocalStorage(res.data.data.token)
  console.log(token.data.token);
  if(res){
    window.location.href = "/";
  }
}

async function login(endpoint, data) {
  console.log("data:", data);
  const res = await axios.post(`${BASE_URL}${endpoint}`, data);
  setTokenInLocalStorage(res.data.data.token)
  console.log(res);
  if(res){
    window.location.href = "/";
  }
}
async function setTokenInLocalStorage(token) {
  localStorage.setItem("userToken" ,JSON.stringify(token))

}

export {
  register,
  login,
  
};

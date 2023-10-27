import axios from "axios";
import { useLocation } from "react-router-dom";
import ReactJsAlert from "reactjs-alert"
import useState from "react"

const BASE_URL = "https://frontend-internship-api.atadp.com/api/v1/auth";

async function register(endpoint, data) {
 
  console.log("data:", data);
  try{
    const res = await axios.post(`${BASE_URL}${endpoint}`, data);
 
    const token = await res.data;
    setTokenInLocalStorage(res.data.data.token)
    if(res){
      window.location.href = "/";
       return "success"
    }
  }catch(error){
      console.log(error.res);
      return "error"
  }
 
  
 

 
}

async function login(endpoint, data) {
  console.log("data:", data);
  try{
    const res = await axios.post(`${BASE_URL}${endpoint}`, data);
 
    const token = await res.data;
    setTokenInLocalStorage(res.data.data.token)
    if(res){
      window.location.href = "/";
       return "success"
    }
  }catch(error){
      console.log(error.res);
      return "error"
  }
 
}
async function setTokenInLocalStorage(token) {
  localStorage.setItem("userToken" ,JSON.stringify(token))

}

export {
  register,
  login,
  
};

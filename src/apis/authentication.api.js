import axios from "axios";

const BASE_URL = "https://frontend-internship-api.atadp.com/api/v1/auth";

async function register(endpoint, data) {
  console.log("data:", data);
  const res = await axios.post(
    `${BASE_URL}${endpoint}`,
    data
  );
  const token = await res.data
  console.log(token.data.token);
}
async function login(endpoint, data) {
  console.log("data:", data);
  const res = await axios.post(
    `${BASE_URL}${endpoint}`,
    data
  );
 
  console.log(data);
}
async function getUserIcon(endpoint, data) {
  console.log("data:", data);
  const res = await axios.post(
    `${BASE_URL}${endpoint}`,
    data
  );
  const token = await res.data
  console.log(token.data.token);
}

export default register;

import Register from "../pages/Auth/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import CompliteData from "../pages/Auth/CompliteData"
import Login from "../pages/Auth/Login"
const routes = [
    {path : '/' , element : <Dashboard></Dashboard>},
    {path : '/login' , element : <Login></Login>},
    {path : '/complite-data' , element : <CompliteData></CompliteData>},
    {path : '/register' , element : <Register></Register>}
]

export default routes
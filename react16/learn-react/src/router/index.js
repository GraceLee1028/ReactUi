import { createBrowserRouter } from "react-router-dom";
import Login from "@/views/system/login/index.js"
import Layout from "@/views/layout/index.jsx"
import Error  from "@/views/layout/error";
const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout />,
        errorElement:<Error />
    },
    {
        path:"/login",
        element:<Login />,
        errorElement:<Error />
    }
])
export default router;
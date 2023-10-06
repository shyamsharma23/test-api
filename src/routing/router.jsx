import { createBrowserRouter } from "react-router-dom";


import App from "../App";
import Goal from "../components/Goal";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
{
    path:"/goals",
    element: <Goal/>,
  
}
  
]);

export default router;
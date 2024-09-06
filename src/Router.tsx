import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "./layout/auth-layout";
import Login from "./features/auth/components/Login";
import Register from "./features/auth/components/Register";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "login",

        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;

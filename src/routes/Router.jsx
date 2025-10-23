import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../pages/Home";
import Plants from "../components/Plants";
import AuthLayout from "../Layouts/Authlayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../provider/PrivateRoute";
import PlantsDetails from "../pages/PlantsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/plantsData.json"),
      },
      {
        path: "/plants",
        element: <Plants />,
        loader: () => fetch("/plantsData.json"),
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/plants-details/:id",
    element: (
      <PrivateRoute>
        <PlantsDetails />
      </PrivateRoute>
    ),
    loader: () => fetch("/plantsData.json"),
  },
]);

export default router;

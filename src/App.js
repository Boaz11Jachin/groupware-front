import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import AdminIndexPage from "./pages/admin/AdminIndex";
import AdminAddEmployeePage from "./pages/admin/AdminAddEmployee";
import AdminManageEmployeePage from "./pages/admin/AdminManageEmployee";
import UserIndexPage from "./pages/user/UserIndex";
import UserWorkspacePage from "./pages/user/UserWorkspace";

function App() {
  const router = createBrowserRouter([
    {
      path: "/admin/index",
      element: <AdminIndexPage />,
    },
    {
      path: "/admin/employees/add",
      element: <AdminAddEmployeePage />,
    },
    {
      path: "/admin/employees/manage",
      element: <AdminManageEmployeePage />,
    },
    {
      path: "/user/index",
      element: <UserIndexPage />,
    },
    {
      path: "/user/workspace",
      element: <UserWorkspacePage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

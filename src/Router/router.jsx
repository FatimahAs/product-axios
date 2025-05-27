import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Products from "../pages/Products";



function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
    { path: "/", element: <Products /> },
	
    ],
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
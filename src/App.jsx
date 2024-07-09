import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import General from "./components/General";
import CheckOut from "./pages/CheckOut";
import CartMenu from "./pages/CartMenu";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<General />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/cartmenu" element={<CartMenu />} />
      </>
    )
  );
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;

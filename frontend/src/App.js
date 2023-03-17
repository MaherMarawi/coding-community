import Login from './pages/login/Login'
import Register from './pages/register/Register'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import RightBar from './components/rightbar/RightBar';
import LeftBar from './components/leftbar/LeftBar';
import Home from "./pages/home/Home"
import Custom from "./pages/custom/Custom"
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Users from './pages/accounts/Accounts';
import RichEditorPage from './pages/richeditor/RichEditorPage';
import NotFound from './pages/notfound/NotFound';
function App() {

  // const { currentUser } = useContext(AuthContext)
  const { darkMode } = useContext(DarkModeContext);

  // const ProtectedRoute = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/login" />;
  //   }

  //   return children;
  // };

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: "6" }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    )
  }
  const AuthLayout = () => {
    return (
      <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
        <Outlet />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        // <ProtectedRoute>
        <Layout />
        // </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/richEditor",
          element: <RichEditorPage />,
        },
        {
          path: "/custom/:key",
          element: <Custom />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/users",
          element: <Users />,
        },

      ],
    },
    {
      path: "/auth",
      element: (
        <AuthLayout />
      ),
      children: [
        {
          path: "/auth/login",
          element: <Login />,
        },
        {
          path: "/auth/register",
          element: <Register />,
        },
      ]
    },
    {
      path: "*",
      element: <NotFound />
      
    }


  ]);



  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

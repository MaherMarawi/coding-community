import Login from './pages/login/Login'
import Register from './pages/register/Register'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import RightBar from './components/rightbar/RightBar';
import LeftBar from './components/leftbar/LeftBar';
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
function App() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } }
  })
  const { currentUser } = useContext(AuthContext)
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
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
        <ReactQueryDevtools />
      </QueryClientProvider>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);



  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

import { createBrowserRouter } from "react-router-dom"
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Cities from "./pages/Cities"
import SignIn from "./pages/SignIn"
import City from "./pages/City"
import SignUp from "./pages/SignUp"
import NotFound from "./pages/NotFound"

const router = createBrowserRouter([
    { 
        path: "/",
        element: <MainLayout />,
        children: [
           { path: '/', element: <Home /> },
           { path: '/home', element: <Home /> },
           { path: '/cities', element: <Cities /> },
           { path: '/auth/signin', element: <SignIn /> },
           { path: '/auth/signup', element: <SignUp /> },
           { path: '/city/:city_id', element: <City /> },
           { path: "/*", element: <NotFound />}
        ]
    }
])

export default router
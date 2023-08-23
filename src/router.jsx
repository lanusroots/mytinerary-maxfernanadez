import { createBrowserRouter } from "react-router-dom"
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Cities from "./pages/Cities"
import SignIn from "./pages/SignIn"
import City from "./pages/City"

const router = createBrowserRouter([
    { 
        path: "/",
        element: <MainLayout />,
        children: [
           { path: '/', element: <Home /> },
           { path: '/home', element: <Home /> },
           { path: '/cities', element: <Cities /> },
           { path: '/signin', element: <SignIn /> },
           { path: '/city/:city_id', element: <City /> }
        ]
    }
])

export default router
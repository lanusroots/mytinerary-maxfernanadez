import { createBrowserRouter } from "react-router-dom"
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Cities from "./pages/Cities"
import SignIn from "./pages/SignIn"

const router = createBrowserRouter([
    { 
        path: "/",
        element: <MainLayout />,
        children: [
           { path: '/', element: <Home /> },
           { path: '/home', element: <Home /> },
           { path: '/cities', element: <Cities /> },
           { path: '/signin', element: <SignIn /> }
        ]
    }
])

export default router
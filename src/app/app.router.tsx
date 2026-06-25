import { createBrowserRouter, RouterProvider } from "react-router";
import { DeumanLayout } from "../landing/layout/DeumanLayout";
import { Home } from "../landing/pages/Home/Home";
import { Service } from "../landing/pages/service/Service";
import { Portafolio } from "../landing/pages/portafolio/Portafolio";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <DeumanLayout/>,
    children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path: "service",
            element: <Service/>
        },
        {
            path: "portafolio",
            element: <Portafolio/>
        }

    ]
  }  
])


export function AppRouter() {
  return <RouterProvider router={appRouter} />
}
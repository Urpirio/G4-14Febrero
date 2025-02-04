import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./src/components/Login";
import Admin from "./src/components/Admin";
import Nelson from "./src/components/Nelson";
import Nashla from "./src/components/Nashla";

const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/Admin",
            element: <Admin/>
        },
        {
            path: '/Nelson',
            element: <Nelson/>
        },
        {
            path: '/Nashla',
            element: <Nashla/>
        }
    ]
);
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={routes}/>
    </StrictMode>
)
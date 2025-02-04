import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./src/components/Login";
import Admin from "./src/components/Admin";

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
    ]
);
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={routes}/>
    </StrictMode>
)
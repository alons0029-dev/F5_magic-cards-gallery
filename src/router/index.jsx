
// REACT-ROUTER-DOM Component
import { createBrowserRouter } from "react-router-dom";

// PAGES Components
import Home from "../pages/Home/Home";

/* FUNCTIONALITY */
export const router = createBrowserRouter ([
    {
        path: "/",
        element: <Home />
    }
])
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Plp } from "./components/Plp";
import { Pdp } from "./components/Pdp";
import { BaseLayout } from "./components/BaseLayout";

const router = createBrowserRouter([
    {
        path: "/products",
        element: <BaseLayout />,
        children: [
            {
                index: true,
                element: <Plp />,
            },
            {
                path: "category/:name",
                element: <Plp />,
            },
            {
                path: ":id",
                element: <Pdp />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;

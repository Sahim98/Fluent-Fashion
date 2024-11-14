import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import App from "../App";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <p>Error Page need to assign here.</p>,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/profile",
                element: <ProfilePage />
            },
        ]
    }
] , {future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true
  },
}
)


export default router;
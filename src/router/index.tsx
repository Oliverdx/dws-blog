import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import PostPage from "@/pages/PostPage";
import NotFound from "@/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/post/:id",
    element: <PostPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

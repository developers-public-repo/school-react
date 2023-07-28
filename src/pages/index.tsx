import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import KanbanBoard from "./kanbanBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/kanban-board",
    element: <KanbanBoard />,
  },
]);

const Pages = () => {
  return (
    <RouterProvider router={router} fallbackElement={<div>로딩중..</div>} />
  );
};

export default Pages;

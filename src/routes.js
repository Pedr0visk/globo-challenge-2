import React from "react";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import UsersList from "./views/UsersList";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: UsersList
  },
];

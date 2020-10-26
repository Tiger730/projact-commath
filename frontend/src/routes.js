import React from "react";

import Main from "./views/Main";
import Basic from "./views/basic";
import Elimination from "./views/elimination";
import Interpolation from "./views/interpolation";
import Differentiation from "./views/differentiation";
import Integration from "./views/integration";
import RootFinding from "./views/root-finding";

const routes = [
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "pj",
      element: <Main />,
    },
    {
      path: "basic",
      element: <Basic />,
    },
    {
      path: "elimination",
      element: <Elimination />,
    },
    {
      path: "interpolation",
      element: <Interpolation />,
    },
    {
      path: "differentiation",
      element: <Differentiation />,
    },
    {
      path: "integration",
      element: <Integration />,
    },
    {
      path: "root-finding",
      element: <RootFinding />,
    },
  ];
  
  export default routes;
  
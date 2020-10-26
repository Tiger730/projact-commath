import React from "react";

import Main from "../views/Main";
import Basic from "../views/Basic";
import Elimination from "../views/Elimination";
import Interpolation from "../views/Interpolation";
import Differentiation from "../views/Differentiation";
import Integration from "../views/Integration";
import RootFinding from "../../src/views/Rootfinding";

const routes = [
  {
    path: '/',
    children: [
      { path: '/', element: <Main/>},
    ]
  },

  {
    path: 'projact-commath',
    children: [
      { path: '/', element: <Main/>},

      { path: 'unit1', element: <Basic/>},
      { path: 'unit2', element: <Elimination/>},
      { path: 'unit3', element: <Interpolation/>},
      { path: 'unit4', element: <Differentiation/>},
      { path: 'unit5', element: <Integration/>},
      { path: 'unit6', element: <RootFinding/>},
    ]
  },
];

export default routes;

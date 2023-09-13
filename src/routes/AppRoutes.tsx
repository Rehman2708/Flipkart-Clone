import { Route, Routes } from "react-router-dom";
import { UnprotectedRoutes } from "./UnprotectedRoutes";

export const AppRoutes: React.FunctionComponent = () => {
  return (
    <Routes>
      {UnprotectedRoutes.map((route: any, index: number) => {
        return (
          <Route
            key={index}
            path={`${route.path}`}
            element={<route.component />}
          />
        );
      })}
    </Routes>
  );
};

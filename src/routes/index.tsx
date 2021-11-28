import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../modules/apartment/components/layout";
// import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loadin...</span>}>
      <BrowserRouter>
        <div>
          <Layout>
            <Routes>
              {routes.map(({ to, path, Component }) => (
                <Route key={to} path={path} element={<Component />} />
              ))}
              <Route
                path="/*"
                element={<Navigate to={routes[0].to} replace />}
              />
            </Routes>
          </Layout>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

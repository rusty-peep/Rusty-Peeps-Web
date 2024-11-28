import "./Header.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./data/routes.json";
import PrivateRoute from "./components/PrivateRoute";
import CourseDetails from "./pages/CourseDetails";
import Home from "./pages/Home";
import AboutUS from "./pages/AboutUS.js";
import Contact from "./pages/Contact.js";
import CarrerTraining from "./pages/CarrerTraining.js";
const componentsMap = {
  CourseDetails: CourseDetails,
  Home: Home,
  AboutUS: AboutUS,
  Contact: Contact,
  CarrerTraining: CarrerTraining,
};
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            const Component = componentsMap[route.element] || (() => null);
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  route.requiresAuth ? (
                    <PrivateRoute>
                      <Component key={route.path} />
                    </PrivateRoute>
                  ) : (
                    <Component key={route.path}/>
                  )
                }
              />
            );
          })}
        </Routes>
      </Router>
    </>
  );
};

export default App;

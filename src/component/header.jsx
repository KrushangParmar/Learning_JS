import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function header() {
  return (
    <>
      <div className="col-12 bg-warning text-dark">
        <div className="d-flex justify-content-center align-items-center list-unstyled">
          <BrowserRouter>
            <Routes>
              <Route
                path="/src/component/Home.jsx"
                element={
                  <>
                    <Home />
                  </>
                }
              >
                Home{" "}
              </Route>{" "}
              <Route
                path="/src/component/About.jsx"
                element={
                  <>
                    <About />
                  </>
                }
              >
                About{" "}
              </Route>{" "}
              <Route path="/"> Services </Route>{" "}
              <Route path="/"> Contact us </Route>{" "}
            </Routes>{" "}
          </BrowserRouter>
        </div>{" "}
      </div>{" "}
    </>
  );
}

export default header;

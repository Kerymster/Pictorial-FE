import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import isoWeek from "dayjs/plugin/isoWeek";
import updateLocale from "dayjs/plugin/updateLocale";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
// import { Provider } from "react-redux";
// import { store, history } from "./redux/store";
import dayjs from "dayjs";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { ProtectedRoute } from "./shared/components/protected-route";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { MAIN_ROUTES } from "./Shared/route.enums";
import reportWebVitals from "./reportWebVitals";

dayjs.extend(updateLocale);
dayjs.extend(isoWeek);
dayjs.extend(isSameOrAfter);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        {/* <Route path={MAIN_ROUTES.LOGIN} element={<Login />} /> */}
        <Route path={MAIN_ROUTES.MAIN} element={<App />} />
      </Routes>
    </Suspense>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

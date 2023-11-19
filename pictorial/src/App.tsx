import React, { useEffect } from "react";
import Layout from "./Components/Layout";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Home } from "./Pages/Home/home.lazy";
import { NotFound } from "./Pages/404NotFound/notFound.lazy";
import { About } from "./Pages/About/about.lazy";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, [location.pathname, navigate]);

  return (
    <Layout>
      <main
        className="bg-slate-100"
        style={{ minHeight: "calc(100vh - 64px)" }}
      >
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          {/* <Route path="users" element={<Users />} /> */}

          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* /End replace */}
      </main>
    </Layout>
  );
}

export default App;

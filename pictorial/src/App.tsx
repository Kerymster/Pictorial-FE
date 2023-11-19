import React, { useEffect } from "react";
import Layout from "./Components/Layout";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Home } from "./Pages/Home/home.lazy";
import { NotFound } from "./Pages/404NotFound/notFound.lazy";
import { About } from "./Pages/About/about.lazy";
import { APP_ROUTES } from "./Shared/route.enums";
import { StoryDetail } from "./Pages/StoryDetail/story-detail.lazy";
import { Stories } from "./Pages/Stories/stories.lazy";

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
          <Route path={APP_ROUTES.HOME} element={<Home />} />
          <Route path={APP_ROUTES.ABOUT} element={<About />} />
          <Route path={APP_ROUTES.STORIES} element={<Stories />} />
          <Route path={APP_ROUTES.STORYDETAIL} element={<StoryDetail />} />
          <Route path={APP_ROUTES.NOTFOUND} element={<NotFound />} />
        </Routes>
      </main>
    </Layout>
  );
}

export default App;

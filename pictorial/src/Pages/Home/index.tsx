import LatestStories from "./components/LatestStories";
import React from "react";
import WelcomingCard from "./components/WelcomingCard";

const Home = () => {
  return (
    <div>
      <WelcomingCard />
      <LatestStories />
    </div>
  );
};

export default Home;

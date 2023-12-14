import React from "react";
import "./Homepage.css";

import Sidenav from "./navigation/Sidenav";
import Timeline from "./timeline/Timeline";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__nav">
        <Sidenav />
      </div>
      <div className="homepage__tileline">
        <Timeline />
      </div>
    </div>
  );
}

export default Homepage;

import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Navigation from "./components/Navigation";
import YoutubeBox from "./components/YoutubeBox";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      {/* <Body /> */}
      <Route component={YoutubeBox} path="/youtube" />
      <Route component={Body} path="/" />
    </div>
  );
}

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";

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
      <Route component={Body} exact path="/" />
      <Route component={YoutubeBox} path="/youtube" />
    </div>
  );
}

export default App;

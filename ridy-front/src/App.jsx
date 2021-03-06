import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/home/Home";
import MapContainer from "./components/map/MapContainer";
import Description from "./components/description/Description";
import Booking from "./components/booking/Booking";

import HomeButton from "./components/homeButton/HomeButton";
import "./style/css/global.css";

function App() {
  return (
    <div className="App">
      <HomeButton />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Map" exact component={MapContainer} />
        <Route path="/Description/:id" exact component={Description} />
        <Route path="/Booking" exact component={Booking} />
      </Switch>
    </div>
  );
}

export default App;

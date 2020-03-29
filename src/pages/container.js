import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import POTD from "./potd";
import Mars from "./mars";
import NavBar from "../components/navbar";
import { DEMO_RESPONSE, DEMO_RESPONSE_VIDEO } from "../lib/demo-responses";
import "./container.scss";

const isApiOverloaded = false;

function Container() {
  const [potd, setPotd] = useState({});

  useEffect(() => {
    const loadPotd = async () => {
      let potd;
      if (isApiOverloaded) {
        potd = DEMO_RESPONSE;
      } else {
        potd = await fetch(`.netlify/functions/potd`).then(res => {
          if (res.ok) return res.json();
        });
        potd = potd || DEMO_RESPONSE;
      }
      setPotd(potd);
    };
    loadPotd();
  }, []);

  return (
    <Router>
      <div className="page-content">
        <NavBar />
        <Switch>
          <Route path="/potd">
            <POTD potd={potd} />
          </Route>
          <Route path="/mars">
            <Mars />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Container;

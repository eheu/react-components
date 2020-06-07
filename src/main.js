import React from "react";
import { render } from "react-dom";
import { ReactCounter } from "./components";

const app = <ReactCounter />

render(app, document.querySelector("#root"));

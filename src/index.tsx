import React from "react";
import { render } from "react-dom";
import Modal from "react-modal";
import Routes from "./routes/Routes";
import "./index.pcss";

Modal.setAppElement("body");

render(<Routes />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App name="calculator" />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();

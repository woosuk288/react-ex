import React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import Routes from "./Routes";

function App() {
  return (
    <StylesProvider injectFirst>
      {/* Your component tree.
      Now, you can override Material-UI's styles. */}
      {/* <Base /> */}
      <Routes />
    </StylesProvider>
  );
}

export default App;

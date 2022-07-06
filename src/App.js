/* This is importing the React library, the useEffect and useState hooks from the React library. */
import React, { useEffect, useState } from "react";

/* Importing the Board component from the components folder. */
import Board from "./components/Board";

/**
 * The App function returns a div that contains the Board component.
 * @returns The Board component is being returned.
 */
const App = () => {

  return (
    < Board />
  )
}

/* Exporting the App component so that it can be imported into other files. */
export default App;

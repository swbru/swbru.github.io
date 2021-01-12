import React from "react"
import "./app.css"
import { Link } from "react-head";

const App = ({ children }) => (
  <div>
    <Link rel="stylesheet" content="https://fonts.googleapis.com/css?family=Montserrat" />
    {children}
  </div>
);

export default App
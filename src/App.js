import React, { useState, useEffect } from "react";
import Layout from "./pages/Layout";

import "./App.css";
import "./css/style.css";
import "./css/responsive.css";

export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("./App.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return <Layout data={data}></Layout>;
}

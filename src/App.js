import React from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function App() {
  return (
    <>
      <GlobalStyle />
      <Sidebar />
      <Header />
      <Content />
    </>
  );
}

export default App;

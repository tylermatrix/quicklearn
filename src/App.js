import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "routes";
import Header from "components/Header";
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes></Routes>
      </Router>
    </div>
  );
}

export default App;

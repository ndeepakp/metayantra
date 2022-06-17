import './App.css';
import { useState, useEffect } from "react";
import JsonData from "./data/data.json";
import React from 'react';
import { Navigation } from "./components/navigation";
import { IssueNft } from "./components/issuenft";
import { Header } from "./components/header";
import { Mynft } from "./components/mynft";
import { Issuenft } from "./components/issuenft";
import { render } from 'react-dom';
 
function App() {
	 const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div className="App">
	
      <Navigation />
      <Header data={landingPageData.Header}/>
      <Mynft />
    </div>
  );
}

export default App;

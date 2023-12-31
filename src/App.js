// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AuctionItem from "./components/AuctionItem";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SearchFilter from "./components/SearchFilter";
import SearchResults from "./components/SearchResults";
import SearchedAuctionItem from "./components/SearchedAuctionItem";
import SignUp from "./components/SignUp";
// import AddItem from "./components/AddItem";

import Login from "./components/Login";
import Timer from "./components/Timer";

function App() {
  let [auctionItemsData, setAuctionItemsData] = useState([]);

  // to read AuctionItems.json and send one AuctionItem obj to AuctionItem.js
  useEffect(() => {
    console.log("in useEffect");
    const fetchData = async () => {
      // let resp = await fetch("/AuctionItems.json");
      let resp = await fetch("http://localhost:3002/");
      let data = await resp.json();
      // console.log(' date from json - ');
      console.log("useEffect fetched AuctionItems =", data);
      setAuctionItemsData(data);
      // console.log('data from state');
      console.log("useState stored auctionItemsData =", auctionItemsData);
      //write the data to the state so we can use it anywhere in the component
    };
    fetchData();
  }, []);
  // }, [auctionItemsData]);

  return (
    <div className="container-fluid">
      <Header />
      <Timer initialTime={2000} />
      <SearchFilter auctionItems={auctionItemsData} />
      <Routes>
        <Route
          path="/"
          element={<AuctionItem AuctionIteminfo={auctionItemsData[1]} />}
        />
        <Route
          path="searchresults/:category"
          element={<SearchResults AuctionItems={auctionItemsData} />}
        />
        <Route
          path="searchedAuctionItem/:id"
          element={<SearchedAuctionItem AuctionItems={auctionItemsData} />}
        />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/additem" element={<AddItem />} />      */}
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

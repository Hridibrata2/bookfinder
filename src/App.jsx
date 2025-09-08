import React from "react";
import { BookProvider } from "./context/BookContext";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SearchResults from "./pages/SearchResults";
import RandomBooks from "./pages/RandomBooks";

function App() {
  return (
    <>
      <BookProvider>
        <Routes>
          <Route path="/" element={<RandomBooks />} />
          <Route path="/search/:query" element={<SearchResults />} />
        </Routes>
      </BookProvider>
    </>
  );
}

export default App;

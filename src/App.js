import React from "react";
import "./style.css";
import SearchMovies from "./searchMovies"

export default function App() {
  return (
    <div className="container">
      <h1 className="title">Movie Search</h1>
      <SearchMovies/>
    </div>
  );
}

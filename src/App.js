import React from "react";
import './App.css';
import Header from './components/Header.js';
import Start from './components/Start.js';
import Slider from "./components/Slider.js";
import Collection from "./components/Collection.js";
import Message from "./components/Message.js";
import { Route, Switch } from "wouter";
import MovieDetails from "./components/Movie/MovieDetails.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/Movie/:movieId">
          {(params) => params.movieId ? <MovieDetails movieId={params.movieId} /> : null}
        </Route>
        {/* Usa un Route sin path para renderizar siempre el componente Collection
          Esto se ejecutará si ninguna de las rutas anteriores coincide */}
        <Route>
          <Start />
          <Slider />
          <Collection titleCollection="Tendencias" collection="popular" />
          <Collection titleCollection="Más Gustadas" collection="top_rated" />
        </Route>
      </Switch>
    </div>
  );
}


export default App;

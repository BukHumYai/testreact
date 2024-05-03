import { createContext, useState } from "react";
import "./App.css";
import Parent from "./components/Parent";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pokedex from "./Pokedex";
import Pokedata from "./components/Pokedata";

export const TeamContext = createContext();

function App() {
  return (
    <>
      <Pokedata pokemonName="ditto"></Pokedata>
      <div class="bg relative">
        <div class=" w-[1112px] h-[210px] absolute bottom-0">
          <div class=" w-1/2 h-[180px]absolute inset-y-8 lest-0">
            <p class="text-7xl text-white">
              What will <br />
              pikachu do ?
            </p>
          </div>
          <div class="grid grid-cols-2 grid-rows-2 gap-2 absolute top-[8px] bottom-[28px] right-[50px] w-1/2">
            <div>
              <button class=" bg-red-500 ring ring-black hover:bg-red-400 active:bg-red-300 focus:outline-none focus:ring focus:ring-red-700 items-center rounded-full h-full w-full">
                <p class="text-[50px] font-bold">FIGHT</p>
              </button>
            </div>
            <div>
              <button class=" bg-yellow-500 ring ring-black hover:bg-yellow-400 active:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-700 rounded-full h-full w-full">
                <p class="text-[50px] font-bold">BAG</p>
              </button>
            </div>
            <div>
              <button class="bg-green-500 ring ring-black hover:bg-green-400 active:bg-green-300 focus:outline-none focus:ring focus:ring-green-700 rounded-full h-full w-full">
                <p class="text-[50px] font-bold">POKEMON</p>
              </button>
            </div>
            <div>
              <button class="bg-blue-500 ring ring-black hover:bg-blue-400 active:bg-blue-300 focus:outline-none focus:ring focus:ring-blue-700 rounded-full h-full w-full">
                <p class="text-[50px] font-bold">RUN</p>
              </button>
            </div>
          </div>
        </div>
        {/* <img src="" alt="" />
        <TeamContext.Provider value={{ team, setTeam }}>
          <Router>
            <nav>
              <Link style={{ padding: 5 }} to="/">
                Home
              </Link>
              <Link style={{ padding: 5 }} to="/pokedex/mewtwo">
                ditto
              </Link>
            </nav>
            <Routes>
              <Route path="/" element={<Parent />} />
              <Route path="/pokedex/:pokeName" element={<Pokedex />} />
            </Routes>
          </Router>
        </TeamContext.Provider>
        <Parent /> */}
      </div>
    </>
  );
}

export default App;

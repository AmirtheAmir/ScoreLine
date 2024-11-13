import React from "react";
import { useState } from "react";
import axios from "axios";

function FormulaCard({ onSelectStandings }) {
  const [query, setQuery] = useState("");
  const [races, setRaces] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://ergast.com/api/f1/${query}.json`
      );
      const raceDate = response.data.MRData.RaceTable.Races;
      setRaces(raceDate);
    } catch (error) {
      console.error("Error fetching F1 season data:", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-2/4 flex flex-col mr-4 border-2 rounded-2xl items-center border-neutral-300 font-customsoftvintage">
      <div className="flex flex-row p-1 m-3 rounded-xl w-[160px] bg-neutral-300">
        <input
          type="text"
          placeholder="What year?"
          className="w-full text-zinc-900 px-3 text-md bg-transparent focus:outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearch} className="bg-transparent px-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
            <path d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z"></path>
          </svg>
        </button>
      </div>
      <div className="w-[95%] flex flex-col">
        <ul>
          {races.map((race, index) => (
            <li
              key={index}
              className="px-5 py-2 my-2 bg-zinc-800 tracking-wider text-neutral-300 flex flex-col rounded-2xl h-28 justify-between"
            >
              <div className="flex flex-row justify-between">
                <span className="w-1/4 flex justify-start text-sm">
                  {race.season}
                </span>
                <span className="w-1/4 flex justify-center text-xl text-red-600">
                  R{race.round}
                </span>
                <span className="w-1/4 flex justify-end text-sm">
                  {race.raceName}
                </span>
              </div>
              <div className="flex justify-between w-4/5 text-amber-500 text-xl items-center flex-row">
                <span>{race.Circuit.circuitName}</span>
                <button
                  onClick={() => onSelectStandings(race.season, race.round)}
                  className="pointer text-sm font-mono mx-5 flex flex-row items-center rounded-xl py-1 px-3 bg-amber-500 text-zinc-900 font-bold"
                >
                  Standings{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="w-5 h-5"
                  >
                    <path d="M13 11H5v2h8v3l4-4-4-4v3zM19 3h2v3h-2zM19 8h2v3h-2zM19 13h2v3h-2zM19 18h2v3h-2z"></path>
                  </svg>
                </button>
              </div>
              <div className="flex flex-row justify-between text-sm">
                <span className="w-1/3 flex justify-start">
                  {race.Circuit.Location.locality}
                </span>
                <span className="w-1/3 flex justify-center">
                  {race.Circuit.Location.country}
                </span>
                <span className="w-1/3 flex justify-end">{race.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FormulaCard;

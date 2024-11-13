import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function FormulaStand({ year, round }) {
  const [standings, setStandings] = useState([]);
  useEffect(() => {
    if (year && round) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://ergast.com/api/f1/${year}/${round}/driverStandings.json`
          );
          const drivers =
            response.data.MRData.StandingsTable.StandingsLists[0]
              .DriverStandings;
          const formattedStandings = drivers.map((driver) => {
            const constructor = driver.Constructors[0];
            return {
              code: driver.Driver.code,
              name: `${driver.Driver.givenName} ${driver.Driver.familyName}`,
              number: driver.Driver.permanentNumber,
              wins: driver.wins,
              nationality: driver.Driver.nationality,
              position: driver.position,
              team: constructor.name,
            };
          });
          setStandings(formattedStandings);
        } catch (error) {
          console.error("Error fetching driver standings:", error);
        }
      };

      fetchData();
    }
  }, [year, round]);

  return (
    <div className="w-2/4 h-full bg-zinc-800 rounded-2xl font-customsoft text-neutral-300 flex justify-center flex-col tracking-wider">
      <div className="ml-3 my-1 flex justify-center w-full">
        <span className="text-neutral-400">
          Your Information will be generated here
        </span>
      </div>
      {standings.length > 0 ? (
        <ul className="w-full flex flex-col items-center">
          {standings.map((driver, index) => (
            <li
              key={index}
              className="bg-zinc-900 rounded-2xl my-1 p-4 w-[98%] justify-between h-36 flex flex-row text-lg"
            >
              <div className="flex w-1/3 flex-col h-full justify-between items-start">
                <span className="text-[12px] text-zinc-500">Code Name</span>
                <span className="text-3xl text-red-600">{driver.code}</span>
                <span className=" bg-red-800 w-[15%] justify-center flex rounded-lg">
                  {driver.number}
                </span>
              </div>
              <div className="flex w-1/3 flex-col h-full text-base justify-between items-center">
                <span>{driver.name}</span>
                <span className="text-red-600 text-3xl">
                  wins: {driver.wins}
                </span>
                <span>{driver.nationality}</span>
              </div>
              <div className="flex w-1/3 flex-col h-full justify-between items-end">
                <span className="text-[12px] text-stone-500">Position</span>
                <span className="text-red-600 text-3xl">{driver.position}</span>
                <span className="text-amber-500">{driver.team}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex justify-center items-center h-20">
          <span>
            No standings available. Please select a{" "}
            <spann className="text-red-600">YEAR</spann> and{" "}
            <spann className="text-red-600">ROUND</spann>.
          </span>
        </div>
      )}
    </div>
  );
}

export default FormulaStand;

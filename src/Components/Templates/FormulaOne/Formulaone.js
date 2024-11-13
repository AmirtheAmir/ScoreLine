import React from "react";
import { useState } from "react";
import Explain from "../../Explaination/Explain";
import FormulaCard from "../../FormulaCard/FormulaCard";
import FormulaStand from "../../FormulaStanding/FormulaStand";

function Formulaone() {
  const [year, setYear] = useState(null);
  const [round, setRound] = useState(null);

  const onSelectStandings = (selectedYear, selectedRound) => {
    setYear(selectedYear);
    setRound(selectedRound);
  };
  return (
    <div className="h-[93%] mx-6">
      <div className="h-44 flex ">
        <Explain />
      </div>
      <div className="w-full flex flex-row ">
        <FormulaCard onSelectStandings={onSelectStandings} />
        <FormulaStand year={year} round={round} />
      </div>
    </div>
  );
}

export default Formulaone;

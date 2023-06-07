import React from "react";

export default function YearFilter({ selectedYear, onYearChange, decades }) {

      function handleYearChange (e){
        onYearChange(e);
};
    
      return (
        <select className="filter" value={selectedYear} onChange={handleYearChange}>
          <option value="">All Years</option>
          {decades.map((decade) => (
            <option key={decade} value={decade}>
              {decade}
            </option>
          ))}
        </select>
      );
    }
    


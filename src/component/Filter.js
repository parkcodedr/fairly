import React, { useState } from "react";


const FilterDropdown = ({ handleFilter }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    //handleFilter(event.target.value);
  };

  return (
    <div className="filter-dropdown-container">
      <label>Filter by Priority:</label>
      <select className="select" value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select a priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
  );
};

export default FilterDropdown;

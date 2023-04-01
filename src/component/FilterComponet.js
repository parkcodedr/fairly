import React, { useState } from 'react';

export default function FilterComponent({ data, onFilter }) {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilter(value);
    onFilter(value);
  };

  return (
    <div>
      <label htmlFor="filter">Filter:</label>
      <select id="filter" className='filter' value={filter} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <ul>
        {data
          .filter((item) => {
            if (filter === 'all') {
              return true;
            } else {
              return item.priority === filter;
            }
          })
          .map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
      </ul>
    </div>
  );
}

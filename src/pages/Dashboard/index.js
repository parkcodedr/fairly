import React, { useState } from 'react'
import FilterDropdown from '../../component/Filter';
import FilterComponent from '../../component/FilterComponet';
import Sidebar from '../../component/Sidebar'

const Dashboard = () => {
    const [data, setData] = useState([
        { id: 1, title: 'Task 1', priority: 'high' },
        { id: 2, title: 'Task 2', priority: 'low' },
        { id: 3, title: 'Task 3', priority: 'medium' },
        { id: 4, title: 'Task 4', priority: 'high' },
        { id: 5, title: 'Task 5', priority: 'low' },
      ]);
    
      const handleFilter = (filterValue) => {
        // Update the app state based on the selected filter value
        console.log('Selected filter:', filterValue);
      };
  return (
    <div className='dashboard__wrapper'>
        <Sidebar />
        <div className='main__content'>
        <h1>Tasks</h1>
      <FilterComponent data={data} onFilter={handleFilter} />
        </div>
        <FilterDropdown />
    </div>
  )
}

export default Dashboard
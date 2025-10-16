import React from 'react';
import "./MainDashboard.css";
import Cards from '../Cards/Cards';
import Table from '../Table/Table';
import RightSide from '../RightSide/RightSide';

function MainDashboard() {
  return (
    <div className='main-dashboard'>
      <h1>Dashboard</h1>
      <Cards />
      <Table />
    </div>
  )
}

export default MainDashboard;
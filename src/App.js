import React from 'react'
import Navbar from './Navbar';
import './App.css'
import Subnavbar from './Subnavbar';
import IssueFilter from './IssueFilter';
import ReposList from './ReposList';
function App() {
  return (
    <div className="App">
        <Navbar/><br/>
        <h1 className="text-center">List Of Nihal Repos</h1>
        <ReposList/>
    </div>
  );
}

export default App;

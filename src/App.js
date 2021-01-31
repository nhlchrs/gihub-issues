import React from 'react'
import Navbar from './Navbar';
import './App.css'
import ReposList from './ReposList';
import IssueFilter from './IssueFilter';
import Subnavbar from './Subnavbar';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Subnavbar/>
        <IssueFilter/>
        <ReposList/>
    </div>
  );
}

export default App;

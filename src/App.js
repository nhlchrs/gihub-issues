import React from 'react'
import HeaderNavbar from './HeaderNavbar';
import './App.css'
import ReposList from './ReposList';
import IssueFilter from './IssueFilter';
import Subnavbar from './Subnavbar';
function App() {
  return (
    <div className="App">
        <HeaderNavbar/>
        <Subnavbar/>
        <IssueFilter/><br/><br/>
        <ReposList/>
    </div>
  );
}

export default App;

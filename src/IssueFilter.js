import React from 'react'
import Octicon from 'react-component-octicons';

function IssueFilter() {
    return (
        <div className="issue-name">
        <nav className="navbar navbar-expand-lg">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 align-icons">
      <li className="nav-item">
        <span className="nav-link"><Octicon name="code" className="octicon-icon"/> &nbsp;Code</span>
      </li>
      <li className="nav-item">
      <span className="nav-link active" ><Octicon name="issue-opened" className="octicon-icon"/> &nbsp;Issues <span className="sr-only">(current)</span></span>
      </li>
      <li className="nav-item">
      <span className="nav-link" ><Octicon name="git-pull-request" className="octicon-icon"/> &nbsp;Pull requests <span className="sr-only">(current)</span></span>
      </li>
      <li className="nav-item ">
      <span className="nav-link " ><Octicon name="comment-discussion" className="octicon-icon"/> &nbsp;Discussions <span className="sr-only">(current)</span></span>
      </li>
      <li className="nav-item">
      <span className="nav-link" ><Octicon name="globe" className="octicon-icon"/> &nbsp;Actions <span className="sr-only">(current)</span></span>
      </li>
      <li className="nav-item">
      <span className="nav-link" ><Octicon name="project" className="octicon-icon"/> &nbsp;Projects <span className="sr-only">(current)</span></span>
      </li>
      <li className="nav-item">
      <span className="nav-link" ><Octicon name="shield" className="octicon-icon"/> &nbsp;Security <span className="sr-only">(current)</span></span>
      </li>
      <li className="nav-item">
      <span className="nav-link" ><Octicon name="graph" className="octicon-icon"/> &nbsp;Insights <span className="sr-only">(current)</span></span>
      </li>
    </ul>
    </nav>
    </div>
    )
}

export default IssueFilter

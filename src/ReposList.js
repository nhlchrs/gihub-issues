import React, {useEffect, useState} from 'react'
import axios from "axios";
import Octicon from 'react-component-octicons';

function ReposList() {
    const [repo, setRepo] = useState([]);
    const [data] = useState(true)
    useEffect(()=>{
        if(data===true){
        axios.get('https://api.github.com/repos/octocat/hello-world/issues').then((res)=>{
            console.log(res.data)
            setRepo(res.data);
        })
    }
    },[data])

    return (
        <div>
        <div className="issues-list">
            {/* <div className="issues-list-first"> */}
                <div><strong><Octicon name="issue-opened" className="octicon-icon"/> 207 Open</strong> </div>&nbsp;&nbsp;
                <div style={{marginRight:"220px"}}><Octicon name="check" className="octicon-icon"/> 12 Closed </div>
            {/* </div> */}
            {/* <div className="issues-list-second"> */}
                <div>Author <Octicon name="chevron-down" className="octicon-icon"/></div>
                <div>Label <Octicon name="chevron-down" className="octicon-icon"/></div>
                <div>Projects <Octicon name="chevron-down" className="octicon-icon"/></div>
                <div>Milestones <Octicon name="chevron-down" className="octicon-icon"/></div>
                <div>Assignee <Octicon name="chevron-down" className="octicon-icon"/></div>
                <div>Sort <Octicon name="chevron-down" className="octicon-icon"/></div>
            {/* </div> */}
            </div> 
    {repo.map((val,index)=>(
        <>
        <div className="issue-title" key={index}>
            <Octicon name="issue-opened" className="octicon-icon-green"/>&nbsp;{val.title} 
           {/* <div className="comments-right" onClick={(e)=>addComments(val.id,e)}>{comments.map((value,index)=>{
            <div key={index}>{value.body}</div>
           })} */}
           <div className="comments-right main-comment"><Octicon name="comment"/><span className="comments-name"> {val.comments}</span></div>
           {/* </div> */}
        </div>
        </>
    ))}
        </div> 
    )
}

export default ReposList

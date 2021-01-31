import React, {useEffect, useState} from 'react'
import axios from "axios";
import Issuelist from './Issuelist';
import Octicon from 'react-component-octicons';

function ReposList() {
    const [repo, setRepo] = useState([]);
    const [data, setData] = useState(true)
    const [repoName, setReponame]= useState('');
    useEffect(()=>{
        var config = {
            headers: { Authorization: "token 5df257c7eadd1ce90705217f1e4c40cd8dd61c96" }
        };
        if(data===true){
        axios.get('https://api.github.com/repos/octocat/hello-world/issues').then((res)=>{
            console.log(res.data)
            setRepo(res.data);
        })
    }
    else{
        axios.get(`https://api.github.com/repos/octocat/hello-world/issues`).then((res)=>{
        console.log(res.data);
    })
    }
    },[data,repoName])
    
    const handleClick=(index)=>{
        // e.preventDefault();
        console.log(index)
        setData(false)
        setReponame(index)
    }

    return (
        <div >
        <table className="table table-style">
  <thead>
    <tr>
      <th scope="col">221 Open</th>
      <th scope="col">300 Closed</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th scope="col">Author&nbsp;<Octicon name="chevron-down" className="octicon-icon"/></th>
      <th scope="col">Label&nbsp;<Octicon name="chevron-down" className="octicon-icon"/></th>
      <th scope="col">Projects&nbsp;<Octicon name="chevron-down" className="octicon-icon"/></th>
      <th scope="col">Milestones&nbsp;<Octicon name="chevron-down" className="octicon-icon"/></th>
      <th scope="col">Assignee&nbsp;<Octicon name="chevron-down" className="octicon-icon"/></th>
      <th scope="col">Sort&nbsp;<Octicon name="chevron-down" className="octicon-icon"/></th>
    </tr>
  </thead>
  <tbody>
    
    {repo.map((val,index)=>(
        <>
        <tr>
        <td key={index}>{val.title}</td>
        </tr>
        </>
    ))}
</tbody></table>
           <Issuelist name={repoName}/>
        </div> 
    )
}

export default ReposList

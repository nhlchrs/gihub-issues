import React, {useEffect, useState} from 'react'
import axios from "axios";
import Issuelist from './Issuelist';
function ReposList() {
    const [repo, setRepo] = useState([]);
    const [data, setData] = useState(true)
    const [repoName, setReponame]= useState('');
    useEffect(()=>{
        var config = {
            headers: { Authorization: "token 5df257c7eadd1ce90705217f1e4c40cd8dd61c96" }
        };
        if(data===true){
        axios.get('https://api.github.com/users/nhlchrs/repos',config).then((res)=>{
            console.log(res.data)
            setRepo(res.data);
        })
    }
    else{
        axios.get(`https://api.github.com/repos/nhlchrs/${repoName}/issues`,config).then((res)=>{
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
        <div>
        <div className="row" style={{padding: '20px'}}>
           {repo.map((val,index)=>(
               <div onClick={(e)=>handleClick(val.name)} className="col-3" style={{padding: '20px'}}>
        <div class="card" style={{width: '18rem'}}>
        <div class="card-body">
                <h4 key={index}>{val.name}</h4>
            </div>
            </div>
            </div>
           ))} 
           </div>
           <Issuelist name={repoName}/>
        </div> 
    )
}

export default ReposList

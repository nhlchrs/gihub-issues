import React,{useState} from 'react'
import axios from 'axios'
function Navbar() {
    const [input, handleInput] = useState('');

    const handleClick=(e)=>{
        e.preventDefault();
        var config = {
            headers: { Authorization: "token 5df257c7eadd1ce90705217f1e4c40cd8dd61c96" }
        };
        alert("nihal")
        axios.get(`https://api.github.com/users/nhlchrs/${input}`,config).then((res)=>{
            console.log(res.data)
        })
    }
    return (
        <div className="navbar-header">
            <nav className="navbar">
            <div className="navbar-item">
    <img src="https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/github-512.png" width="30" height="30" alt="github logo"/>
        <div className="navbar-text">
            {/* <input type="text" className="nav-text" placeholder="Search or jump to"/> */}
            <form class="form-inline">
    <input className="form-control mr-sm-2 nav-text" value={input} onChange={(e)=>handleInput(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
    <button className="btn btn-outline-success" onClick={(e)=>handleClick(e)}>search</button>
  </form>
        </div>
   </div>
     </nav>
        </div>
    )
}

export default Navbar

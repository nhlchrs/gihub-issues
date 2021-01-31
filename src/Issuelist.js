import React, {useEffect, useState} from 'react'
import axios from 'axios'

import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
function Issuelist({name}) {

    const [data, setData] = useState([]);
    const [show, setShow] = useState(true)
    const [inputVal, setinput]=useState('');
    const [comments, setComments]= useState([])
    // const [post, postData] = useState('')
    useEffect(() => {
        const config = {
            headers: { Authorization: "token 5df257c7eadd1ce90705217f1e4c40cd8dd61c96" }
        };
        axios.get(`https://api.github.com/repos/nhlchrs/${name}/issues`,config)
  .then((response) => {
    setData(response.data);
    console.log(data)
    console.log(data.length)
    if(data.length ==='' ){
      alert("dsahda")
      setShow(false)
    }
    console.log(show)
  });

    },[name])

    const addComments=(id, number)=>{
        alert(id)
        alert(number)
        const body=JSON.stringify(inputVal);
        console.log(body);
        const config = {
            headers: {"content-type":"application-data", Authorization: "token 5df257c7eadd1ce90705217f1e4c40cd8dd61c96" }, body
        };
        
        axios.post(`https://api.github.com/repos/nhlchrs/${name}/issues/${number}/comments`,config).then((res)=>console.log(res))
    }
    
    
    return (
        <div>
      {data.map((val, index)=>(
        <Accordion>
        
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={val.id}>
              {val.title}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={val.id}>
            <Card.Body>
          <h5>Nos. of Comments: {val.comments}</h5>
          <input type="text" value={inputVal} onChange={(e)=>setinput(e.target.value)}/>
              <button className="btn btn-success" onClick={(e)=>addComments(val.id, val.number)}>Add</button>
            {comments.map((value,indexx)=>(
              <div key={indexx}>
              
              <p><strong>Comments:</strong> {val.comments > 0 ? value.body : "No Comments"}</p>
              
      </div>
            ))}</Card.Body>
          </Accordion.Collapse>
        </Card>
        </Accordion>  
          
        
      ))}

        </div>
    )
}

export default Issuelist

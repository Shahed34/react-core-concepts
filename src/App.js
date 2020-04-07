import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const products=[
  {name:'Photoshop',price :'$300'},
  {name:'Adope Reader',price :'$6.00'},
  {name:'Facebook',price :'$5000.00'},
  {name:'Whatsapp',price :'$5000.00'}
]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       {
         products.map(pd =><Product product={pd}></Product>)
       }
       <Users></Users>
       <Count></Count>
       

      </header>
    </div>
  );
}

function Count(){

  const [count ,setCount]=useState(50);
  const handleIncrease=()=>{
      const Newcount=count+1;
      setCount(Newcount);
  };
  
     return(
       <div>
          <h1>Count:{count}</h1>
          <button onClick={()=>setCount(count-1)}>Decrease Value</button>
          <button onClick={handleIncrease}>Increase Value{setCount}</button>   
       </div> 
    ) 
  }
  function Users(){
    const [users,setUsers]=useState([]);
    useEffect(()=>
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data)),[]
    )
   
    return (
      <div>
        <h3>Dynamic Users:{users.length}</h3>
        <ul>
          {
            users.map(user=><li>{user.email}</li>)
          }
          
        </ul>
      </div>
    )

  }

function Product(props){
    const productstyle={
      border:'1px solid grey',
      borderRadius:'5px',
      backgroundColor:'lightred',
      hight:'200px',
      width:'200px',
      float:'left',
      margin:'10px'
    }
    console.log(props)
      return <div style={productstyle}>
        <h3>{props.product.name}</h3>
        <h4>{props.product.price}</h4>
        <button>Buy now</button>
      </div>
}

export default App;

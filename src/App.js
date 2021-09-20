import React , { useState } from 'react';
import './App.css';

const App = ()=> {

  const[users,updatedUsers] = useState([]);
  const getUserData = async() =>{
    const response = await fetch("https://mocki.io/v1/bbbb4eed-753b-4ff5-87cb-88146b8f7dae");
    const jsonResponse = await response.json();
    updatedUsers(jsonResponse);
  };

  return (
    <div className="App">
      <nav>
        <h1>Lets Grow More</h1>
        <button onClick={getUserData}>Get Users</button>
      </nav>
    <ul>
      {users.map((data) => (
        <li key={data.id}><img id="image" src={data.avatar}/><br/><br/>{data.first_name} {data.last_name} <br/><br/><a href="#">{data.email}</a> 
        </li>
      ))}
    </ul>

    </div>
  );
};

export default App;

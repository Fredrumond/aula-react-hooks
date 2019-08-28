import React, { useState } from 'react';
import './App.css';
import formSubmit from './formSubmit';

const App = ()=> {

  //const [valor,setValor] = useState('');
  const [email,setEmail] = useState('teste@teste.com');
  
  const handleFormSubmit = (e) => {
    e.preventDefault();

    formSubmit(email,setEmail);
  }

  return (
    <div>
      <h1>Ola</h1>

      <form onSubmit={handleFormSubmit}> 
        <label>Qual é seu E-mail?</label>
        <input id="email" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        
        <input className="submit" type="email" type="submit"/>
      </form>
      
    </div>    
  );
}

export default App;

import React, {useRef, useState, useMemo } from 'react';
import './App.css';
import formSubmit from './formSubmit';
import Contador from './Contador';
import useTitleInput from './hooks/useTitleInput';

const App = () => {

  const [email, setEmail] = useTitleInput('teste@hotmail.com');
  const [nome, setNome] = useState('');

  const countString = (string) => {
    return string.length;
  };

  //const countedName = countString(nome);

  const countedName = useMemo(() => countString(nome),[nome]);

  const area = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    formSubmit(email, setEmail);
  };
  return (
    <div ref={area}>

      <button onClick={() => {
        area.current.classList.remove("maior");
        area.current.classList.add("menor");
      }}>Fonte -</button>
      <button onClick={() => {
        area.current.classList.remove("menor");
        area.current.classList.add("maior");
      }}>Fonte +</button>

      <h1>Bem Vindo(a)</h1>

      <form onSubmit={handleFormSubmit}>
      <label>Qual Seu Nome?</label>
        <input
          id="nome"
          type="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value) }
        />
        <p>{countedName} letras</p>
        <label>Qual Seu E-mail?</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value) }
        />

        <input className="submit" type="submit" value="Enviar" />
      </form>

      <hr />

      <Contador />
      

    </div>
  );
};

export default App;
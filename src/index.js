import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  
  const handClick = props.reset;

  return (
    <button onClick={handClick}>
      reset
    </button>
  );

};

const Application = () => {

  const [name, setName] = useState("");

  const reset = () => {
    setName("");
  };

  return (
    <main>
      <input value={name} onChange={(event) => setName(event.target.value)} placeholder='type your name' />
      <Button reset={reset} />
      {name && <h1>Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));

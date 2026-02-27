import { useState } from "react";

export default function Player() {

  const[enteredPlayerName,setPlayerName] = useState('');
  const[submittedName,setSubmittedName] = useState(false);

  function handleChange(event) {
    setSubmittedName(false);
    setPlayerName(event.target.value);
  }

  function handleButtonClick() {
    setSubmittedName(true);

  }

  return (
    <section id="player">
      <h2>Welcome {submittedName ? enteredPlayerName :'unknown entity'}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerName}/>
        <button onClick={handleButtonClick}>Set Name</button>
      </p>
    </section>
  );
}

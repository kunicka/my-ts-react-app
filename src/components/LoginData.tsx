import React, { useState } from 'react';
import {WelcomeMessage} from "./WelcomeMessage"

export const LoginData: React.FC = () => {
  const [name, setName] = useState<string>('Jan');
  const [lastname, setLastname] = useState<string>('Kowalski');
  const [nameinfo, setNameinfo] = useState<any>('Nie jesteś zalogowany');
  const [buttonDisplay, setButtonDisplay] = useState<boolean>(false);
  

  return (
    <div className="div-container">
      <h5>INPUT EVENT USESTATE</h5>
      <h6>Przedstaw się:</h6>
      <form>
        <p>
          Imię:{' '}
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </p>
        <p>
          Nazwisko:
          <input
            type="text"
            onChange={(e) => {
              setLastname(e.target.value);
            }}
          />
        </p>
      </form>
      <button
        onClick={(e) => {
          setNameinfo(`Witaj ${name} ${lastname}!`);
          setButtonDisplay(!buttonDisplay)
        }}
      >
        Zaloguj się
      </button>
      <p>{nameinfo}</p>
      {buttonDisplay && <WelcomeMessage name={name} lastname={lastname}/>}
      
    </div>
  );
};

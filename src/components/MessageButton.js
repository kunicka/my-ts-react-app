import React, {useState} from 'react'

function MessageButton() {
    const [message, setMessage] = useState("****");
    
    return (
        <div>
            <h3>Kliknij w przycisk, a odkryjesz hasło => {message}</h3>
            <div className="div-container">
            <button onClick={()=>setMessage({message:"REACT"})}>KLIKNIJ</button>
            </div>
           
        </div>
    )
}

export default MessageButton

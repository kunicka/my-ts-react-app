import React from 'react'

function WhatYourNameIs(props) {

    

function formatName() {return `Zwykła funkcja: ${props.name} ${props.lastName}`}
const arrowFormatName=()=> `Arrow function: ${props.name} ${props.lastName}`

    return (
        <div>
            <h4>Różnica w wywoływaniu funcji oraz arrow function </h4>
            <div className="div-container">
                {formatName()} 
                <br/>
                {arrowFormatName()} </div>
           
        </div>
    )
}

export default WhatYourNameIs

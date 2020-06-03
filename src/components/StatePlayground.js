import React from 'react';
import LikeButton from "./LikeButton.js";
import WhatYourNameIs from "./WhatYourNameIs.js"
import Timer from "./Timer.js";
import TimerEvery5Sec from "./TimerEvery5Sec.js";
import TimerHooks from "./TimerHooks.js";
import InputApi from "./InputApi.js"


function StatePlayground () {


    return (
        <div>
            <h2>PLAYGROUND</h2>
            <LikeButton/>
            <WhatYourNameIs name="Gracjan" serName="Brzdęk"/>
            <Timer/>
            <TimerEvery5Sec/>
            <TimerHooks/>
            <InputApi/>
        </div>
    )
}

export default StatePlayground


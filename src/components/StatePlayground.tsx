import React from 'react';
import { LikeButton } from './LikeButton';
// import { WhatYourNameIs } from './WhatYourNameIs';
// import { Timer } from './Timer';
// import { TimerEvery5Sec } from './TimerEvery5Sec';
import { TimerHooks } from './TimerHooks';
// import { InputApi } from './InputApi';
import { MessageButton } from './MessageButton';
import {DataFetching} from './DataFetching'
import {UseEffectHook} from './UseEffectHook';


export const StatePlayground = () => {
  return (
    <div>
      <TimerHooks />
      
      {/* <InputApi /> */}
      <LikeButton />
      <MessageButton />
      {/* <WhatYourNameIs name="Gracjan" lastName="Brzdęk" /> */}
      {/* <Timer /> */}
      {/* <TimerEvery5Sec /> */}
      <UseEffectHook/>
      
      <DataFetching/>
      
      
    </div>
  );
};

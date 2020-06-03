import React from 'react';
import { LikeButton } from './LikeButton';
import { WhatYourNameIs } from './WhatYourNameIs';
import { Timer } from './Timer';
import { TimerEvery5Sec } from './TimerEvery5Sec';
import { TimerHooks } from './TimerHooks';
import { InputApi } from './InputApi';
import { MessageButton } from './MessageButton';

export const StatePlayground = () => {
  return (
    <div>
      <h2>PLAYGROUND</h2>
      <LikeButton />
      <MessageButton />
      {/* here was a bug "surname" instead of "lastname" but typescript catched it! :P */}
      <WhatYourNameIs name="Gracjan" lastName="Brzdęk" />
      <Timer />
      <TimerEvery5Sec />
      <TimerHooks />
      <InputApi />
    </div>
  );
};

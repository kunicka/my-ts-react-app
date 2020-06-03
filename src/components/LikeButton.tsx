import React, { useState } from 'react';

export const LikeButton: React.FC = () => {
  const [liked, setLiked] = useState<boolean>(false); // does not need useState<boolean>(false); because this boolean is "inferred" from inital value

  return (
    <div>
      <h4>Guzik lajkowania</h4>
      <div className="div-container">
        <button onClick={() => setLiked(true)}>Like! {liked}</button>
      </div>
    </div>
  );
};

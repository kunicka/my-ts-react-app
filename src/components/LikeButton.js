import React, {useState} from 'react'

function LikeButton() {
    const [liked, setLiked] = useState(false);
    
    return (
        <div>
            <h4>Guzik lajkowania</h4>
          <div className="div-container">
              <button onClick={()=>setLiked({liked:true})}>Like!</button>
          </div>
        </div>
    )
}

export default LikeButton

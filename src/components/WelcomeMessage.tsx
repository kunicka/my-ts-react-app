import React, {useState} from 'react';
import { StatePlayground } from './StatePlayground';

export interface WelcomeMessageProps {
    name:string;
    lastname:string;
}

    export const WelcomeMessage:React.FC<WelcomeMessageProps> = (props) => {
    const [buttonDisplay, setButtonDisplay] = useState<boolean>(false);
    return (
        <div>
            <h5>Witaj {props.name} w projekcie kończącym drugi tydzień stażu</h5>
            <p>Dziękuję za zalogowanie się. Kliknij w poniższy przycisk, a dostaniesz dostęp do projektu, który kończy drugi tydzień stażu. </p>
            <button onClick={()=>setButtonDisplay(!buttonDisplay)}>Kliknij aby uzyskać dostęp do prtojektu</button>
            {(buttonDisplay===true) && <StatePlayground/>}
            
        </div>
    )
}

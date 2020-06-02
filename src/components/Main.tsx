import React from 'react';
// import DataFetching from './DataFetching.js';
import CategoryList from "./CategoryList";
import StatePlayground from "./StatePlayground.js";


function Main():JSX.Element {
    return (
        <div>
            {/* <DataFetching/> */}
            <CategoryList/>
            <StatePlayground/>
            

        </div>
    )
}

export default Main

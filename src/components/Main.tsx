import React from 'react';
// import {DataFetching} from './DataFetching;
import { CategoryList } from './CategoryList';
import { StatePlayground } from './StatePlayground';

export const Main: React.FC = () => {
  return (
    <div>
      {/* <DataFetching/> */}
      <CategoryList />
      <StatePlayground />
    </div>
  );
};

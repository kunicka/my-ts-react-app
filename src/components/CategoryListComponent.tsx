import React from 'react';
import { Category, Subcategory } from '../database/types';

export interface CategoryListComponentProps {
  category: string;
  subcategory: Subcategory[];
  subcatArray: string[];
  post: Category;
}

export const CategoryListComponent: React.FC<CategoryListComponentProps> = (props) => {
  // const allCategory = (props)=> {
  // props.subcategory.for (let index = 0; index < array.length; index++) {
  // const element = array[index];
  // return element;
  // }
  // const {subcategory: {subid=1, subname}} = props;

  // function ShowCategories(subcatArray) {
  // subcatArray.for(let index = 0; index < subcatArray.length; index++) {
  //     const element = array[index];
  //     const htmlElement =  <option>element</option>
  //     return htmlElement;
  // } }

  const ShowCategories=(subcatArray) => {
    const subcategoryItem: JSX.Element = subcatArray.map((item) => <option key={item.id}>item.id</option>);
  }

  return (
    <div className="div-container">
      <p>{props.post.id} {props.post.category}
      <select id="props.post.id" name={props.post.category}>
      {props.post.id} {props.post.category}
        {ShowCategories}
      </select>
      </p>
    </div>
  );
};

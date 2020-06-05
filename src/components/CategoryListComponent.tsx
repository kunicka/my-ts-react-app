import React from 'react';
import { Category, Subcategory } from '../database/types';

export interface CategoryListComponentProps {
  category: string;
  subcategory: Subcategory[];
  subcatArray: string[];
  post: Category;
}

export const CategoryListComponent: React.FC<CategoryListComponentProps> = (props) => {

  const ShowCategories = (subcategory) => {
    return subcategory.map((item, idx) => <option key={idx}>{item.name}</option>);
  };
  return (
    <div className="div-container">
      <p>
        {props.post.id} {props.post.category}
        <select id="props.post.id" name={props.post.category}>
          {ShowCategories(props.subcategory)}
        </select>
      </p>
    </div>
  );
};
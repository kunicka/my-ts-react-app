import React from 'react';
import { mainCategoryArray } from '../database/mainCategoryArray';
import { CategoryListComponent } from './CategoryListComponent';

export interface CategoryListProps {}

export const CategoryList: React.FC<CategoryListProps> = () => {
  const categoryList = mainCategoryArray.map((posts) => (
    <CategoryListComponent
      post={posts}
      key={posts.id}
      category={posts.category}
      subcategory={posts.subcategory}
      subcatArray={posts.subcategory.map((subcat) => subcat.name)}
    />
  ));

  return (
    <div>
      <h4>Zaplanuj co zrobisz w tym tygodniu z podanych kategorii:</h4>
      <p>{categoryList}</p>
    </div>
  );
};

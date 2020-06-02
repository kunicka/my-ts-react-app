import React from "react";
import mainCategoryArray from "../database/mainCategoryArray.js";
import CategoryListComponent from "./CategoryListComponent";

function CategoryList() {
  const categoryList = mainCategoryArray.map(posts => 
  <CategoryListComponent 
  post={posts} 
  key={posts.id} 
  category={posts.category} 
  subcategory={posts.subcategory} 
  subcatArray={posts.subcategory.map(subcat=> (subcat.name))} />)

  
  return (
    <div>
      <h4>Zaplanuj co zrobisz w tym tygodniu</h4>
        {categoryList} 
    </div>
  );
}

export default CategoryList;

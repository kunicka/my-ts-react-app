import React from "react";

function CategoryListComponent(props) {
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
    

         
    

  return (
    <div className="div-container">
       {props.post.id} {props.post.category} 
       <select id="props.post.id" name={props.post.category}>
           {/* {ShowCategories} */}
       </select>
    </div>
  );
}

export default CategoryListComponent;

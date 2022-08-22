//   // TODO: Display the list of recipes using the structure of table that is provided.
//   // TODO: Create at least one additional component that is used by this component.
//   // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
// export default RecipeList;
import React from "react";
//This code is rendering the recipe view. It's a function that takes in an object and returns a table row with all of the properties from the object.
const RecipeView = ({ recipe, RecipeDelete }) => (
  <tr className="row">
    <td>{recipe.name}</td>
    <td>{recipe.cuisine}</td>
    <td className="photoFit">
      <img src={recipe.photo} alt="" className="photoFit" />
    </td>
    <td className="content_td"><p>{(recipe.ingredients)}</p></td>
    <td className="content_td"><p>{(recipe.preparation)}</p></td>
    <td>
      <button name="delete" onClick={RecipeDelete}>Delete</button>
    </td>
  </tr>
);
/* This code is mapping over the recipes array and returning a RecipeView component for each recipe. The key property of React allows us to uniquely identify each element in an array. The index value is used as the unique identifier for this particular recipe. This way, when we delete a recipe, we can use the same function that deletes it from our state so that we don't have to rerender all the elements in our list again. */
const RecipeList = ({recipes, RecipeDelete}) => {
  // User can delete a recipe.
  const rows = recipes.map((recipe, index) => (
    <RecipeView
      key={index}
      recipe={recipe}
      RecipeDelete={() => RecipeDelete(index)}/>
  )) 

  // rendering the list of recipes.
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr className="tableHeader">
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="tableRows">
          {rows}
        </tbody>
      </table>
    </div>
  );
};


export default RecipeList;
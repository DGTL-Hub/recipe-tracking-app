import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"



/* This code is filtering the list of recipes and returning a new array with all items except for the one that was clicked. */
function App() {
  
  //! const [recipes, setRecipes] = useState(RecipeData);

// This code is setting the state of recipes to be equal to RecipeData.
  const [recipes, setRecipes] = useState([...RecipeData]);
  
  const RecipeDelete = (indexToDelete) => {
  
  const filteredList = recipes.filter(
      (recipe,index) => index !== indexToDelete
    )
/* This code is setting the state of recipes to be equal to RecipeData. */

    setRecipes(filteredList)
  }
  
  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

/* This code is creating a new component called RecipeList. It takes in an array of recipes and passes it to the function as props.
The RecipeDelete function is passed down from the parent component, which then deletes that recipe when clicked on.
This code also creates a new component called RecipeCreate, which allows you to add your own recipes by clicking on the button at the bottom of this page.
 */
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} RecipeDelete={RecipeDelete}/>
      <RecipeCreate recipes={recipes} setRecipes={setRecipes}/>
    </div>
  );
}
export default App;
import React from "react";
import { useState } from "react";
import { useAddRecipeMutation } from "../../api/recipe.api";

const CreateRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    image: "",
  });
const [addRecipe] = useAddRecipeMutation()
  const handleSubmit = (e) => {
    e.preventDefault()
    addRecipe(recipe)
    setRecipe({...recipe, name:"",image:""})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={recipe.name}
          onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
          placeholder="Recipe name"
        ></input>
        <input
          type="text"
          value={recipe.image}
          onChange={(e) => setRecipe({ ...recipe, image: e.target.value })}
          placeholder="Recipe image"
        ></input>
        <button type="submit" style={{margin:10}}>Create</button>
      </form>
    </div>
  );
};

export default CreateRecipe;

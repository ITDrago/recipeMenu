import RecipeItem from "./recipe-item/RecipeItem";
import Header from "./headers/Header";
import User from "./user/User";
import { useGetRecipesQuery } from "../api/api";
import CreateRecipe from "./create-recipe/CreateRecipe";
import { useState } from "react";

function App() {
  const [searchTern, setSearchTern] = useState("");
  const { isLoading, data } = useGetRecipesQuery(searchTern);
  
  return (
    <section>
      <Header />
      <User />
      <CreateRecipe />
      <input
        type="text"
        value={searchTern}
        onChange={(e) => setSearchTern(e.target.value)}
        placeholder="Search recipe"
      ></input>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : data ? (
          data.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
        ) : (
          <div>Not found</div>
        )}
      </div>
    </section>
  );
}

export default App;

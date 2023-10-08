import RecipeItem from "./recipe-item/RecipeItem";
import Header from "./headers/Header";

function App() {
  return (
    <section>
      <Header/>
      <div>
        <RecipeItem
          recipe={{
            id: 1,
            name: "Pasta",
          }}
        />
        <RecipeItem
          recipe={{
            id: 2,
            name: "Pizza",
          }}
        />
        <RecipeItem
          recipe={{
            id: 3,
            name: "Porridge",
          }}
        />
      </div>
    </section>
  );
}

export default App;

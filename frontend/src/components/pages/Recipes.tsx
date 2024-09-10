import React, { useState } from "react";
import RecipeCreator from "../compound/RecipeCreator/RecipeCreator";
import AllRecipes from "../compound/RecipeCreator/AllRecipes";
import seeRecipes from "../../assets/readingBook.png";
import createNewRecipe from "../../assets/createNewList.png";
import cookingBowl from "../../assets/frontImage.png";
import { ShoppingCartIcon } from "lucide-react";

const Recipes: React.FC = () => {
  const [view, setView] = useState<"lists" | "create recipe">("lists");

  const getIconSrc = () => {
    switch (view) {
      case "lists":
        return seeRecipes;
      case "create recipe":
        return createNewRecipe;
      default:
        return cookingBowl;
    }
  };

  const handleOnView = (newView: "lists" | "create recipe") => {
    setView(newView);
  };

  return (
    <div className="bg-sky-400 flex flex-col min-h-screen w-full max-w-screen-lg mx-auto px-8 pt-12 ">
      {/* Main buttons */}
      <div className="flex justify-between items-center mb-8 mx-[-8%]">
        <button
          className="bg-blue-500 text-white font-mono font-semibold w-28 h-28 rounded-full shadow-md flex items-center justify-center transform skew-y-[-5deg] border-8 border-b-blue-800 border-l-blue-950"
          onClick={() => handleOnView("lists")}
        >
          your recipes
        </button>

        <div className="w-28 h-28 rounded-full border-8 border-fuchsia-300 flex items-center justify-center bg-white">
          <img
            src={getIconSrc()}
            alt="Current View Icon"
            className="w-24 h-24 object-cover rounded-full"
          />
        </div>

        <button
          className="bg-fuchsia-400 text-white font-mono font-semibold w-28 h-28 rounded-full shadow-md flex items-center justify-center transform skew-y-[5deg] border-8 border-b-fuchsia-700 border-l-fuchsia-950"
          onClick={() => handleOnView("create recipe")}
        >
          new recipe
        </button>
      </div>

      {/* Conditional rendering based on view */}
      <div className="flex-grow px-3">
        {view === "lists" && <AllRecipes />}
        {view === "create recipe" && <RecipeCreator />}
      </div>
    </div>
  );
};

export default Recipes;

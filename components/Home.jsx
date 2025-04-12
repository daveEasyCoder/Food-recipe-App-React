import React, { useContext } from "react";
import { myContext } from "../Context/GlobalContext";
import RecipeItem from "./RecipeItem";

const Home = () => {
  const { loading, foodRecipe,error } = useContext(myContext);


  if (loading) {
    return  <div className="flex justify-center items-center h-[80vh]">
                 <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
  }
  if (error) {
    return <div className="flex justify-center items-center h-[80vh]">
              <p className="font-semibold text-2xl">Something went wrong! Please try again</p>
          </div>
  }
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5 mt-8 p-2.5 max-w-6xl m-auto">
        {foodRecipe && foodRecipe.length
          ? foodRecipe.map((food) => (
             <RecipeItem key={food.recipe_id} food={food} />
            ))
          : null}
      </div>
    </>
  );
};

export default Home;

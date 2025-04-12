import React from 'react'
import { Link } from "react-router-dom";

const RecipeItem = ({food}) => {
  return (
    <div className="shadow-md hover:shadow-lg rounded-xl pb-3 hover:-translate-y-1 duration-300">
        <div>
        <img
            className="w-full h-40 rounded-xl object-cover"
            src={food.image_url}
            alt="recipe image"
        />
        </div>
        <div className="pl-2 mt-2">
        <p className="text-sm text-blue-400">{food.publisher}</p>
        <p className="text-md font-bold mb-1.5">
            {food.title.slice(0, 10)}
        </p>
         <Link to={`/details/${food.recipe_id}`} className="details-recipe-btn hover:bg-gray-400">Recipe Details</Link>
        </div>
  </div>
  )
}

export default RecipeItem
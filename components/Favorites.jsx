import React, { useContext } from 'react'
import { myContext } from '../Context/GlobalContext'
import RecipeItem from './RecipeItem'

const Favorites = () => {

  const {favorites} = useContext(myContext)
  
  return (
    <div className=''>
      <div className=''>
        {
          favorites && favorites.length ? 
          <div>
           <h1 className='font-bold text-4xl text-center mt-10 text-orange-600'>Your Favorites</h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5 mt-8 p-2.5 max-w-6xl m-auto'>
              {
                  favorites.map((food) => (
                    <RecipeItem key={food.recipe_id} food={food} />
                  ))
              }
            </div>
          </div> : 
              <div className='h-[60vh] flex items-center justify-center'>
                 <p className='text-gray-800 text-2xl'>No Favorites</p>
              </div>
        }
      </div>
    
    </div>
  )
}

export default Favorites
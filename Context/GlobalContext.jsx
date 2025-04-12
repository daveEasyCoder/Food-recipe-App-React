import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const myContext = createContext();


export default function GlobalState({ children }){

  const [search, setSearch] = useState("");
  const[foodRecipe,setFoodRecipe] = useState([])
  const[loading,setLoading] = useState(false)
  const [error,setError] = useState('')
  const [favorites,setFavorite] = useState([])
  const [showNavbar,setShowNavbar] = useState(false)

  useEffect(() => {

    const loadStoredFavorite = () => {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites'))
      
      if(storedFavorites){
        setFavorite(storedFavorites)
      }else{
        console.log("no stored");
        
      }
    }

    const fetchFoodRecipe = async() => {
      setLoading(true)
      const response = await fetch('https://forkify-api.herokuapp.com/api/search?q=chicken')
      const data = await response.json()
      if (data.recipes && data.recipes.length) {
        setFoodRecipe(data.recipes)
        setLoading(false)
      }
      
    }




    fetchFoodRecipe()
    loadStoredFavorite()


  },[])


   const handleSubmit = async(e) => {
    e.preventDefault()
    if (search) {
      try {
        setLoading(true)
        const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${search}`)
 
        const data = await response.json()
        if (data && data.recipes) {
          setFoodRecipe(data.recipes)
          setLoading(false)
          setSearch('')
       }
        
    } catch (error) {
        setError(error)
        setLoading(false)
        setSearch('')

    }
    }

  }


  const addToFavorites = (item) => {
    const updatedFavorites = [...favorites,item]
    setFavorite(updatedFavorites)
    localStorage.setItem('favorites',JSON.stringify(updatedFavorites))
  }

  const removeFromFavorite = (recipeId) => {
    const updatedFavorites = favorites.filter(item => item.recipe_id !== recipeId)
    setFavorite(updatedFavorites)
    localStorage.setItem('favorites',JSON.stringify(updatedFavorites))
  }

  const isInFavorite = recipeId => {
     return favorites.some(fav => fav.recipe_id === recipeId)
  }
 
  
  return (
    <myContext.Provider value={{
       search,
        setSearch,
         handleSubmit,
         foodRecipe,
         loading,
         error,
         addToFavorites,
         favorites,
         removeFromFavorite,
         isInFavorite,
         showNavbar,
         setShowNavbar
        }}>
      {children}
    </myContext.Provider>
  );
}

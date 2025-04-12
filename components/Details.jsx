import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { myContext } from '../Context/GlobalContext'

const Details = () => {
  const {addToFavorites,removeFromFavorite,isInFavorite} = useContext(myContext)

  const {id} = useParams()
  const[detailInfo,setDetailInfo] = useState('')
  const [loading,setLoading] = useState(false)
  
  useEffect(() => {
    const getGetDetails = async() => {
      try {
         setLoading(true)
         const url = `https://forkify-api.herokuapp.com/api/get?rId=${id}`
         const response = await fetch(url)
         const data = await response.json()
         
         if (data && data.recipe) {
           setDetailInfo(data.recipe)
           setLoading(false)
           
         }
         
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    }
    getGetDetails()
  },[])




  if (loading) {
    return  <div className="flex justify-center items-center h-[80vh]">
                 <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
           </div>
  }
  

  
  
  return (
    <div className='px-4'>
       {
        detailInfo && 
        <div className='flex flex-col md:flex-row gap-6 max-w-6xl m-auto mt-12'>
            <div className='md:w-[50%] h-98 rounded-sm overflow-hidden shadow-sm'>
              <img className='w-full h-full object-cover hover:scale-105 duration-200' src={detailInfo.image_url} alt="" />
            </div>
            <div className='md:w-[50%]'>
               <p className='font-bold text-gray-800 text-3xl'>{detailInfo.title}</p>
               {
                detailInfo.ingredients && detailInfo.ingredients.length && 
                 <ul className='mt-2'>
                    <p className='text-xl text-gray-700 font-semibold'>Ingredients:</p>
                    {
                      detailInfo.ingredients.slice(0,5).map((ingredient,index) => (
                        <li key={index} className='pl-3 text-sm text-gray-700 mt-1'>{ingredient}</li>
                      ))
                    }
                 </ul>
               }
               <button onClick={() => isInFavorite(detailInfo.recipe_id) ? removeFromFavorite(detailInfo.recipe_id) : addToFavorites(detailInfo)} className='text-sm px-6 py-1.5 cursor-pointer rounded-sm bg-gray-700 text-white mt-4 hover:shadow-lg hover:shadow-gray-300'>
                   {isInFavorite(detailInfo.recipe_id) ? 'Remove From Favorite' : 'Add To Favorite'}
                </button>
            </div>
        </div>
       }
    </div>
  )
}

export default Details
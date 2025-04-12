import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import { myContext } from "../Context/GlobalContext";

const Navbar = () => {
  const { search, setSearch,handleSubmit,setShowNavbar,showNavbar } = useContext(myContext);


  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };


  
  return (
    <div>
      <nav className="flex justify-between gap-3 items-center px-8 py-4">
        <div className="text-gray-900 hidden sm:block font-bold sm:text-2xl"><Link to="/">FoodRecipe</Link></div>
        <div className="flex items-center">
          <input
            onChange={handleSearchChange}
            className="border-1 border-gray-300 px-5 py-1.5  text-sm outline-0"
            type="text"
            value={search}
            placeholder="Search food here..."
          />
          <button onClick={handleSubmit} className="px-5 py-1.5 text-sm cursor-pointer border-1 border-blue-500 rounded-r-md text-white bg-blue-600">
            search
          </button>
        </div>
        <ul className={`flex flex-col md:flex-row items-center gap-2 absolute right-0 p-4 left-0 ${showNavbar ? 'top-0' : '-top-26'} bg-black/80 md:bg-white md:static md:p-0`}>
          <li>
            <NavLink onClick={() => setShowNavbar(prev => !prev)} className="text-white md:text-gray-700" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setShowNavbar(prev => !prev)} className="text-white md:text-gray-700" to="/favorites">
              Favorites
            </NavLink>
          </li>
        </ul>
        {
          showNavbar ?  <FaTimes onClick={() => setShowNavbar(prev => !prev)} className="text-white md:hidden cursor-pointer relative z-40" size={22} />
                     :  <FaBars onClick={() => setShowNavbar(prev => !prev)} className="text-gray-600 md:hidden cursor-pointer relative z-40" size={22} />
        }
       
      </nav>
    </div>
  );
};

export default Navbar;

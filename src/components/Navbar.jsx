import React from 'react';
import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  const handleSearchClick = () => {
    alert("Search functionality available");
  };

  const handleBagClick = () => {
    alert("Shopping bag is available - Ready for your items!");
  };

  const handleNavClick = (navItem) => {
    switch (navItem.toLowerCase()) {
      case 'store':
        alert("Welcome to the Apple Store! Browse our latest products");
        break;
      case 'mac':
        alert("Discover our powerful Mac lineup - From MacBook Air to Mac Pro");
        break;
      case 'iphone':
        alert("Explore the iPhone family - Find your perfect iPhone");
        break;
      case 'ipad':
        alert("Check out the iPad collection - Your next computer is not a computer");
        break;
      case 'watch':
        alert("Apple Watch - The ultimate device for a healthy life");
        break;
      default:
        alert(`Welcome to ${navItem} section`);
    }
  };

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} />
        
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div 
              key={nav} 
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
              onClick={() => handleNavClick(nav)}
            >
              {nav}
            </div>
          ))}
        </div>
        
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img 
            src={searchImg} 
            alt="search" 
            width={18} 
            height={18}
            className="cursor-pointer"
            onClick={handleSearchClick}
          />
          <img 
            src={bagImg} 
            alt="bag" 
            width={18} 
            height={18}
            className="cursor-pointer"
            onClick={handleBagClick}
          />    
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
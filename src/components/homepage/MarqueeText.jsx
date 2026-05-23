import React from 'react';
import books from "../../../public/books.json";
import { keycloak } from 'better-auth/plugins';

const MarqueeText = () => {

    return (
        
    <div className="bg-indigo-600 dark:bg-indigo-700 text-white py-3 shadow-sm my-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
       
        <marquee 
          behavior="scroll" 
          direction="left" 
          scrollamount="6" 
          className="text-sm md:text-base font-semibold tracking-wide flex items-center"
        >
          <span>
             New Arrivals: {
                books.map(book=> <span key={book.id} className="text-yellow-300"> {book.category} |</span>)
             }  
            <span className="mx-8"> | </span> 
            Special Discount on Memberships... Register Today! 
            <span className="mx-8">|</span> 
            Check out our new Tech and Science collections!
          </span>
        </marquee>

      </div>
    </div>
  
    );
};

export default MarqueeText;
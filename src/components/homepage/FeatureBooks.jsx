 import Link from "next/link";
import books from "../../../public/books.json"
import FeatureBookCard from "./bookCard/FeatureBookCard";

const FeatureBooks = () => {
    return (
        <div className=" bg-base-200 rounded-md shadow-md">
            <div className=" w-11/12 mx-auto px-6 md:px-12 py-12">
                  <div className="text-center space-y-3">
                      <h2 className="font-bold text-2xl md:text-4xl ">Featured Books</h2>
                      <p className="font-medium text-gray-400 text-xs md:text-xl">Explore our top 4 featured books handpicked just for you.</p>
                  </div>

                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                      books.slice(1,5).map(book=> <FeatureBookCard key={book.id} book={book}></FeatureBookCard>)  
                    }
                 </div>

            </div>
            
      </div>
    );
};

export default FeatureBooks;
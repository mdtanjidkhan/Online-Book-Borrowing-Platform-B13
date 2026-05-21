
 "use client";
import AllBookCard from "@/components/All-books/AllBookCard";
// import { IoSearchSharp } from "react-icons/io5";
import books from "../../../public/books.json"

import { useState } from "react";

export default function AllBooksPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Story", "Tech", "Science"];
  const filteredBooks = books.filter((book) => {
    const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto min-h-screen pt-10 px-4 gap-6">
      <div className="w-full md:w-1/4 bg-gray-50 p-5 rounded-xl h-fit border">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Filter by Category</h3>
        <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-x-visible">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-left rounded-lg text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-650 border hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full md:w-3/4 space-y-6">
        <div className="w-full">
          <input
            type="text"
            placeholder="Search books by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
            className="w-full p-3 border border-gray-350 rounded-xl shadow-sm focus:outline-none "
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">
          Books Found: ({filteredBooks.length})
        </h2>
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
                   <AllBookCard key={book.id} book={book}></AllBookCard>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-10"> No Books Found..</p>
        )}
      </div>

    </div>
  );
}
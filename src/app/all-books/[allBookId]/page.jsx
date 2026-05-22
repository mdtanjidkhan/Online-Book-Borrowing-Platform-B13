import React from 'react';

const books = [
  {
    "id": 1,
    "title": "The Silent Forest",
    "author": "Emma Wilson",
    "description": "A mysterious story about a hidden forest and the secrets buried within it.",
    "category": "Story",
    "available_quantity": 8,
    "image_url": "https://images.unsplash.com/photo-1544947950-fa07a98d237f"
  },
  {
    "id": 2,
    "title": "Mastering JavaScript",
    "author": "John Carter",
    "description": "A practical guide to modern JavaScript development for beginners and professionals.",
    "category": "Tech",
    "available_quantity": 12,
    "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794"
  },
  {
    "id": 3,
    "title": "Space Beyond Earth",
    "author": "Sophia Lee",
    "description": "Explore the mysteries of galaxies, planets, and the future of space exploration.",
    "category": "Science",
    "available_quantity": 5,
    "image_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
  },
  {
    "id": 4,
    "title": "Broken Memories",
    "author": "Daniel Smith",
    "description": "An emotional story of friendship, loss, and rediscovery.",
    "category": "Story",
    "available_quantity": 7,
    "image_url": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
  },
  {
    "id": 5,
    "title": "React for Developers",
    "author": "Michael Brown",
    "description": "Learn React.js with real-world projects and advanced concepts.",
    "category": "Tech",
    "available_quantity": 10,
    "image_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353"
  },
  {
    "id": 6,
    "title": "Quantum Wonders",
    "author": "Olivia Martinez",
    "description": "An introduction to quantum physics and its real-life applications.",
    "category": "Science",
    "available_quantity": 6,
    "image_url": "https://images.unsplash.com/photo-1507842217343-583bb7270b66"
  },
  {
    "id": 7,
    "title": "The Last Letter",
    "author": "Charlotte Green",
    "description": "A heartfelt story about love, hope, and second chances.",
    "category": "Story",
    "available_quantity": 9,
    "image_url": "https://images.unsplash.com/photo-1519682337058-a94d519337bc"
  },
  {
    "id": 8,
    "title": "Node.js Essentials",
    "author": "William Davis",
    "description": "A complete guide to backend development using Node.js and Express.",
    "category": "Tech",
    "available_quantity": 11,
    "image_url": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da"
  },
  {
    "id": 9,
    "title": "The Human Brain",
    "author": "Ethan Walker",
    "description": "Understand how the brain works and how science explains human behavior.",
    "category": "Science",
    "available_quantity": 4,
    "image_url": "https://images.unsplash.com/photo-1511108690759-009324a90311"
  },
  {
    "id": 10,
    "title": "Whispers of the Night",
    "author": "Ava Johnson",
    "description": "A suspense-filled story set in a quiet town with dark secrets.",
    "category": "Story",
    "available_quantity": 13,
    "image_url": "https://images.unsplash.com/photo-1474932430478-367dbb6832c1"
  },
  {
    "id": 11,
    "title": "AI Revolution",
    "author": "Noah Harris",
    "description": "Discover how artificial intelligence is transforming the modern world.",
    "category": "Tech",
    "available_quantity": 14,
    "image_url": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570"
  },
  {
    "id": 12,
    "title": "Future of Medicine",
    "author": "Mia Thompson",
    "description": "A scientific exploration of future healthcare technologies and discoveries.",
    "category": "Science",
    "available_quantity": 3,
    "image_url": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&q=80"
  }
]


const AllBookDetailsPage = async ({params}) => {
    
     const {allBookId} = await params;
    const book = books.find(b=> b.id === parseInt(allBookId));
     console.log(book,"all books liv")
    return (
        <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row gap-12 items-center md:items-start">
        
        {/* Left Side: Large Book Cover */}
        <div className="w-full md:w-2/5 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700">
          <img src={book.image_url} alt={book.title} className="w-full h-full object-cover" />
        </div>

        {/* Right Side: Text & Details */}
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1 rounded-md uppercase tracking-wider">
              {book.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-950 dark:text-white leading-tight">{book.title}</h1>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">By <span className="text-gray-800 dark:text-gray-200 font-semibold">{book.author}</span></p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-gray-900 dark:text-white">Description</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{book.description}</p>
          </div>

          {/* Available Quantity */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            {book.available_quantity} copies left
          </div>
          {/* button */}
             <div>
                <button 
      // onClick={handleBorrowClick}
      className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl"
    >
     Borrow This Book
    </button>
             </div>


          </div>
          </div>
          </div>
    );
};

export default AllBookDetailsPage;
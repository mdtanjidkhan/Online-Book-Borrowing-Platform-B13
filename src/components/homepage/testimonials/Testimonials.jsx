import Image from "next/image";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Tanvir Rahman",
    role: "Tech Student",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80",
    comment: "The Tech category here is incredible! I found all the Next.js and programming resources I needed for my semester projects. Highly recommended!",
    rating: 5
  },
  {
    id: 2,
    name: "Anika Tabassum",
    role: "Story Lover",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    comment: "I absolutely love the clean layout. Borrowing and keeping track of my favorite storybooks has never been this smooth and easy!",
    rating: 5
  },
  {
    id: 3,
    name: "Sifator Islam",
    role: "Science Enthusiast",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    comment: "A fantastic platform for book worms! The collection of science journals and quantum physics books here is top-notch.",
    rating: 4
  }
];


const Testimonials = () => {
    return (
        <div className="bg-base-200 rounded-md shadow-md">
           <div className="w-11/12 mx-auto px-6 md:px-12 py-12">
              <div className="text-center max-w-2xl mx-auto  space-y-3">
        <h2 className="text-3xl  md:text-4xl font-bold">
          What Our Readers Say
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Don't just take our word for it. Here is what our continuous community of readers has to say about their experience.
        </p>
      </div>
      {/* Reviews demo card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
        {reviews.map((review) => (
          <div
            key={review.id} 
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/60 flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
          >
            {/* Review Text */}
            <div className="space-y-4">
              {/* Star Rating */}
              <div className="flex text-amber-400 text-sm">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <span key={index}><FaStar />
</span>
                ))}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 italic leading-relaxed">
                {review.comment}
              </p>
            </div>

            {/* User Info (Profile Picture, Name, Role) */}
            <div className="flex items-center gap-4 mt-6 pt-4 border-t border-gray-50 dark:border-gray-700/50">
              {/* <img 
                src={review.image} 
                alt={review.name} 
                className="w-12 h-12 rounded-full object-cover border-2 border-indigo-100 dark:border-gray-700"
              /> */}
                 <div className="">
                    <Image 
                    src={review.image}
                     width={50} height={50}
                     alt={review.name}
                     className=" rounded-full object-cover border-2 border-indigo-100 dark:border-gray-700"
                     >
                       
                    </Image>
                 </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                  {review.name}
                </h4>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">
                  {review.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

     </div>
        </div>
    );
};

export default Testimonials;
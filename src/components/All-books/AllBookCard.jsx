import Link from "next/link";

const AllBookCard = ({ book }) => {
  return (
    <div className="border p-4 rounded-xl bg-white shadow-sm flex flex-col justify-between">
      <div>
        <figure className="h-56 overflow-hidden p-2 ">
          <img
            className="w-full h-full object-cover rounded-md"
            src={book.image_url}
            alt="books" />
        </figure>
        <span className="text-xs bg-indigo-100 text-indigo-800 px-2.5 py-0.5 rounded-full font-semibold">
          {book.category}
        </span>
        <h4 className="text-lg font-bold text-gray-900 mt-2">{book.title}</h4>
      </div>
     <Link href={`/all-books/${book.id}`}> <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded-lg text-sm hover:bg-gray-800">
      Books Details
      </button></Link>
    </div>
  );
};

export default AllBookCard;
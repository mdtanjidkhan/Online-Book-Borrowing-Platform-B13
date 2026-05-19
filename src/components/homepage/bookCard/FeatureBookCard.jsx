import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeatureBookCard = ({book}) => {
    return (
        <div className="card bg-base-100 shadow-sm mt-5">
  <figure className='p-2'>
      <Image src={book.image_url} className='rounded-md shadow-md'
      width={300} height={200} alt='Book.s'
      ></Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-xl">{book.title}</h2>
     <h3 className='font-bold '>Author : {book.author}</h3>
    <p className='font-medium text-xs text-gray-400'>{book.description}</p>
    <div className="card-actions">
      <Link href={`/books/${book.id}`}><button className="btn btn-primary">View Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default FeatureBookCard;
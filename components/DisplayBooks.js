/* eslint-disable @next/next/no-img-element */
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
// const products = [
//     {
//       id: 1,
//       name: 'Focus Paper Refill',
//       href: '#',
//       price: '$13',
//       description: '3 sizes available',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg',
//       imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
//     },
//     {
//       id: 2,
//       name: 'Focus Card Holder',
//       href: '#',
//       price: '$64',
//       description: 'Walnut',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-02.jpg',
//       imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
//     },
//     {
//       id: 3,
//       name: 'Focus Carry Case',
//       href: '#',
//       price: '$32',
//       description: 'Heather Gray',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg',
//       imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
//     },
//     // More products...
//   ]

import Link from "next/link";

  
  export default function DisplayBooks({books}) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>
  
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {books.map((book) => (
              <Link key={book.isbn13} href={`/books/${book.isbn13}`} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                  <h3>{book.title}</h3>
                  <p>{book.price}</p>
                </div>
                {/* <p className="mt-1 text-sm italic text-gray-500">{book.description}</p> */}
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
import React from 'react'

function BookCard({bookData}) {

  let thumbnailUrl = bookData?.volumeInfo?.imageLinks?.thumbnail;

  return (
    <div className="flex flex-col items-center justify-center gap-2 w-52 min-h-[300px] bg-gray-900 shadow-md rounded-lg py-4">
        <div className="w-[128px] max-h-[196px] rounded-lg">
            <img src={thumbnailUrl || "https://placehold.co/128x196?text=Preview\\nNot\\nAvailable&font=poppins"} alt="" className="rounded-lg bg-cover max-h-[196px]" />
        </div>

        <p className="text-gray-100 text-center">{bookData.volumeInfo.title}</p>
        <p className="text-gray-400 text-center">{bookData.volumeInfo.authors}</p>
    </div>
  )
}

export default BookCard
import React from 'react'

function BookCard({bookData}) {

  return (
    <div className="flex flex-col items-center gap-2 w-52 h-[300px] bg-gray-900 shadow-md rounded-lg">
        <div className="w-[128px] h-[196px] mt-6 bg-red-500 rounded-lg">
            {/* <img src="null" alt="" className="rounded-lg" /> */}
            <img src={bookData.volumeInfo.imageLinks.thumbnail} alt="" className="rounded-lg" />
        </div>
        {/* <p className="text-gray-100">title</p>
        <p className="text-gray-400">author</p> */}
        <p className="text-gray-100">{bookData.volumeInfo.title}</p>
        <p className="text-gray-400">{bookData.volumeInfo.authors[0]}</p>
    </div>
  )
}

export default BookCard
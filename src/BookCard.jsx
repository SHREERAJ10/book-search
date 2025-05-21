import React from 'react'

function BookCard({bookData}) {
  return (
    <div className="flex flex-col items-center gap-2 w-52 h-[300px] bg-blue-500">
        <div className="w-[128px] h-[196px] mt-6 bg-red-500">
            <img src={bookData[0].volumeInfo.imageLinks.thumbnail} alt="" />
        </div>
        <p>{bookData[0].volumeInfo.title}</p>
        <p>{bookData[0].volumeInfo.authors[0]}</p>
    </div>
  )
}

export default BookCard
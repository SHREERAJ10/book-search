import React from 'react'

function BookCard() {
  return (
    <div className="flex flex-col items-center gap-2 w-52 h-[300px] bg-blue-500">
        <div className="w-[128px] h-[196px] mt-6 bg-red-500">
            <img src="" alt="" />
        </div>
        <p>Title</p>
        <p>Author</p>
    </div>
  )
}

export default BookCard
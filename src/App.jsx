import {useState} from 'react'
import SearchBar from './SearchBar'
import BookCard from './BookCard'

function App() {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className = "w-full h-screen bg-gradient-to-r from-slate-950 to-slate-800 text-gray-100 font-custom flex flex-col items-center">
      <h1 className = "text-4xl text-[#faf3ee]">Book Search</h1>
      <SearchBar searchTerm = {searchTerm} setSearchTerm={setSearchTerm}/>
      {/* <h2 className = "text-2xl">Popular Books</h2> */}
      <BookCard />
    </div>
  )
}

export default App

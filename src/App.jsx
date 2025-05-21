import {useState, useEffect, useRef} from 'react'
import SearchBar from './SearchBar'
import BookCard from './BookCard'

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [fetchData, setFetchData] = useState(false);
  const [bookData,setBookData] = useState([]);

  useEffect(()=>{
    if(fetchData){
      const fetchData = async ()=>{
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
        const data = await response.json();
        setBookData(data.items);
      }
      fetchData();
      setFetchData(false);
    }
  },[fetchData]);

  return (
    <div className = "w-full h-screen bg-gradient-to-r from-slate-950 to-slate-800 text-gray-100 font-custom flex flex-col items-center gap-12">
      <h1 className = "text-4xl text-[#faf3ee] mt-8">Book Search</h1>
      <SearchBar searchTerm = {searchTerm} setSearchTerm={setSearchTerm} setFetchData={setFetchData}/>
      {/* <h2 className = "text-2xl">Popular Books</h2> */}
      {bookData.length!=0?<BookCard bookData={bookData}/>:null}
      
    </div>

  )
}

export default App

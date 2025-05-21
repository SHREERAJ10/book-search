import {useState, useEffect, useRef} from 'react'
import SearchBar from './SearchBar'
import BookCard from './BookCard'

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [fetchData, setFetchData] = useState(false);
  const [bookData,setBookData] = useState([]);

  useEffect(()=>{
    
    if(fetchData){
        const fetchBookData = async ()=>{
          try{
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
            const data = await response.json();
            setBookData(data.items);
            setFetchData(false);
          }
          catch (err){
            alert("Error fetching the data " + err);
          }
      };
      fetchBookData();  
    }

  },[fetchData]);

  return (
    <div className = "w-full text-gray-100 font-custom flex flex-col items-center justify-between gap-12 p-12">

      <div className="flex flex-col items-center gap-6 w-full">
        <h1 className = "text-4xl text-[#faf3ee] lg:text-5xl">Book Search</h1>
        <SearchBar searchTerm = {searchTerm} setSearchTerm={setSearchTerm} setFetchData={setFetchData}/>
      </div>
      
      
      <div className="flex flex-wrap w-4/5 justify-center gap-8">
        {bookData.length!=0?
          (bookData.map((data)=>{
            return <BookCard key={data.id} bookData={data} />  
          })):
          null
      }

      </div>
    </div>

  )
}

export default App

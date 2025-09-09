import axios from 'axios';
import React, { useState } from 'react'

const Unplash = () => {
    const [search,setSearch] = useState("")
    const [result,setResult] = useState([]);
    const handleSearch =()=>{

axios.get(`https://api.unsplash.com/search/photos?page=1&query=${search}`, {
    headers: {
      Authorization:
     "use you api id"
    },
  })
  .then(function (response) {
    console.log(response);
    setResult(response.data.results);
  })
  .catch(function (error) {
    console.log(error);
  })
  
    }
  return (
    <div className='' >
      <h1  className='bg-blue-600 text-4xl font-bold py-2 text-center text-white'       >Image Gallery</h1>
    <div className='pt-8 bg-slate-100/50 h-screen ' >
       <p className='mb-8 text-center flex justify-center items-center gap-4  ' >{" "}
         <input className='border-1 border-slate-400 bg-white w-96 px-4 py-2 rounded-2xl' type="text" placeholder='search here image' onChange={(e) => setSearch(e.target.value)}  />
        <button className='bg-gradient-to-t frombg-radial-[at_50%_75%] from-sky-500 via-blue-500 to-indigo-400 to-90% py-2 px-4 rounded-2xl text-white font-bold text-xl transform active:scale-95' onClick={handleSearch} >Search</button>
       </p>
        <div className="flex flex-wrap  justify-center  gap-5 p-10 ">
        {result.length > 0 ? (
          result.map((item) => (
            <img
              key={item.id}
              src={item.urls.small}
              alt={item.alt_description || "unsplash-img"}
              className="rounded-md shadow shadow-black w-65  h-60 "            />
          ))
        ) : (
          <p className="text-gray-500 text-3xl ">No images found. Try searching!</p>
        )}
      </div>
    
    </div>
    </div>
  )
}

export default Unplash
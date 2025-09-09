import React, { useState } from "react";
import axios from "axios";

const Youtube = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    axios
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          q: search,
          key: 'AIzaSyDH1QHRiqGf_E7y31CGJQ9ssIuR_0VOTBY',
          part: "snippet",
        },
      })
      .then((response) => {
        setResult(response.data.items);
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
    <div className="bg-red-600 h-12"></div>
    <div className="h-2 bg-amber-800 ">
     <div className=" ">
       <p className="flex justify-center items-center gap-2  p-2  w-full ">
        <span className="text-base font-medium">Search Video:</span>
        <input
          className="border rounded-lg px-3 py-1 text-base outline-none focus:ring-2 focus:ring-red-400"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="rounded-lg w-20 p-1  outline-none cursor-pointer bg-red-500 hover:bg-red-600 text-white font-semibold text-base"
          onClick={handleSearch}
        >
          Search
        </button>
      </p>
     </div>

      <div className="flex flex-wrap justify-center mt-5 ">
        {result && result.map((item, index) => {
          return (
            <div key={index}>
              <iframe
                className="m-3 rounded-lg mt-5"
                width="336"
                height="200"
                src={"https://www.youtube.com/embed/" + item.id.videoId}
              
            
               
              ></iframe>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default Youtube;

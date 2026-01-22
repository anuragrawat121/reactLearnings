import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import './index.css';

function App() {
  const [userData, setUserData] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
        setUserData(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false)
      }
    }
    getData()
  }, [page])

  return (<>
    <div className=" min-h-screen w-full bg-black h-screen s">
      {isLoading && (
        <h1 className="text-white text-2xl p-8">Loading..</h1>
      )}
      {!isLoading && (
        <div className=" w-screen bg-black flex flex-wrap gap-8 items-center  p-12">{
          userData.map((item, idx) => {
            return (
              <div key={item.id || idx} >
                <a href={item.download_url} target="_blank" rel="noopener noreferrer">
                  <div className="h-64 w-82 rounded-xl object-cover overflow-hidden flex flex-col">
                    <img className="h-52 w-full" src={item.download_url} alt="images" />
                    <div className="h-14 w-full  bg-white text-2xl text-black text-center">{item.author}</div>
                  </div >
                </a >
              </div >
            )
          })
        }</div>
      )}
      <div className="w-screen h-12 flex items-center justify-center bg-black gap-10">
        <button
          onClick={() => {
            if (page > 1) {
              setPage(page - 1)
            }
          }}
          disabled={page === 1}
          className="text-black font-bold text-2xl bg-amber-300 active:scale-95 h-12 w-24 text-center rounded-xl disabled:opacity-50 disabled:cursor-not-allowed">prev</button>
        <div className="text-white text-xl">Page {page}</div>
        <button onClick={() => setPage(page + 1)} className="text-black font-bold text-2xl  bg-amber-300 active:scale-95 h-12 w-24 text-center rounded-xl">next</button>

      </div>
    </div >
  </>
  )
}

export default App;

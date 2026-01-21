import "./App.css";
import { useState } from "react";
import { X } from "lucide-react";

function App() {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [data, setData] = useState([]);

  const submitHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const notes = {
      title: title,
      discription: discription,
    };
    setData([...data, notes]);
    setTitle("");
    setDiscription("");
  };

  const getTitle = (e) => {
    setTitle(e.target.value);
  };

  const getDescription = (e) => {
    setDiscription(e.target.value);
  };

  const removeNote = (e, idx) => {
    setData(data.filter((item, index) => index !== idx));
  };

  return (
    <>
      {/* {form section} */}

      <div className="h-screen bg-black flex items-center justify-between flex-col sm:flex-row">
        <div className="h-full  p-10 flex flex-col gap-12 lg:w-1/2 sm:w-full">
          <h1 className="text-2xl font-bold  text-white">Add Notes</h1>

          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="w-full"
          >
            <input
              type="text"
              placeholder="Title"
              value={title}
              required
              className="w-full p-2 mb-8 rounded-lg text-white border-2 border-gray-300"
              onChange={(e) => {
                getTitle(e);
              }}
            />
            <input
              value={discription}
              type="text"
              placeholder="Description"
              required
              onChange={(e) => {
                getDescription(e);
              }}
              className="w-full inline-block outline-gray-400 text-2xl h-48 p-2 mb-12 rounded-lg text-white border-2 border-gray-300"
            />
            <button
              type="submit"
              className="w-28 h-12 bg-amber-300 border-none rounded-2xl font-bold text-lg active:scale-95"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="h-full w-1 bg-white hidden  lg:block"></div>

        {/* Notes section */}

        <div className="h-full bg-black w-full lg:w-1/2 sm:w-full font-bold p-10">
          <h1 className="text-2xl text-white font-bold mb-4">Notes</h1>
          <div className="w-full p-8 flex items-center justify-evenly flex-wrap gap-10 ">
            {/* Note Card */}
            {data.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="bg-[url(https://img.freepik.com/free-vector/cute-star-design-memo_53876-93615.jpg?semt=ais_hybrid&w=740&q=80)] bg-contain border-2 px-6 py-1 border-gray-300  rounded-2xl h-48 w-42 relative"
                >
                  <X
                    onClick={(e) => {
                      removeNote(e, idx);
                    }}
                    strokeWidth={5}
                    className=" text-5xl absolute top-1 right-1 cursor-pointer hover:text-red-600 transition-colors"
                  />
                  <h1 className="text-black text-2xl font-bold">
                    {item.title}
                  </h1>
                  <p className=" text-gray-600 text-lg font-bold">
                    {item.discription}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

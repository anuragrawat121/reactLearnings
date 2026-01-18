function App() {
  const handleclick = () => {
    // first way
    console.log("clicked");
  };

  const handleclick2 = (e) => {
    // second way
    console.log(e); // passing event object
    console.log(e.target.value);
  };

  return (
    <>
      <button onClick={handleclick}>click me</button>
      <button
        onClick={(e) => {
          handleclick2(e);
        }}
      >
        click me
      </button>

      <input
        onChange={handleclick2}
        type="text"
        placeholder="Enter your name"
      />
    </>
  );
}

export default App;

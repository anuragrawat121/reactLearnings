
import Navbar from "./Components/Navbar"
import Card from "./Components/Card"
function App(props) {

  return (
    <>
      <Navbar />
      <div className="card-container">
        <Card user='Anurag Rawat' img="https://images.unsplash.com/photo-1767958465025-75c050ab10c4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Card user='Ashish' img="https://images.unsplash.com/photo-1527980965255-d3b416303d12" />
        <Card user='Arpit' img="https://images.unsplash.com/photo-1527980965255-d3b416303d12" />
      </div>
    </>
  )
}

export default App

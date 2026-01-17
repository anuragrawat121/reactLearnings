import Section1 from "./Components/Section01/Section1";
function App() {
  const data = [
    {
      id: 1,
      img: "https://plus.unsplash.com/premium_photo-1731355866971-42046925bb95?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Setisfied",
      color: "#25D366",
    },
    {
      id: 2,
      img: "http://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      tag: "Setisfied",
      color: "royalblue",
    },
    {
      id: 3,
      img: "https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      tag: "Undelivered",
      color: "red",
    },
    {
      id: 4,
      img: "https://plus.unsplash.com/premium_photo-1731355866971-42046925bb95?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Setisfied",
      color: "yellow",
    },
  ];
  return (
    <>
      <Section1 data={data} />
    </>
  );
}

export default App;

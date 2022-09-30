import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards">
        <div className="container flex">
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;

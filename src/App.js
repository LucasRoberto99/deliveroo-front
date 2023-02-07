import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import WhiteBar from "./components/WhiteBar";
import Categorie from "./components/Categorie";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://site--deliveroo-backend--fhx5w78hhgzd.code.run/"
    );
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>LOADING ...</span>
  ) : (
    <div className="App">
      <Header />
      <WhiteBar
        title={data.restaurant.name}
        description={data.restaurant.description}
        img={data.restaurant.picture}
      />{" "}
      <div className="bgcgrey">
        <div className="main">
          <div className="leftmain">
            {data.categories.map((categorie, index) => {
              if (categorie.meals.length !== 0) {
                return (
                  <Categorie
                    key={index}
                    data={categorie}
                    cart={cart}
                    setCart={setCart}
                  />
                );
              }
            })}
          </div>
          <div className="rightmain">yo</div>
        </div>
      </div>
    </div>
  );
}

export default App;

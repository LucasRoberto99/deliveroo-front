import Meal from "./Meal";

const Categorie = ({ data, cart, setCart }) => {
  return (
    <div className="categorie">
      <h1>{data.name}</h1>
      <div className="categoriedisplay">
        {data.meals.map((meal, index) => {
          return (
            <Meal
              key={index}
              title={meal.title}
              description={meal.description}
              price={meal.price}
              picture={meal.picture}
              popular={meal.popular}
              cart={cart}
              setCart={setCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Categorie;

const Meal = ({
  title,
  description,
  price,
  picture,
  popular,
  cart,
  setCart,
}) => {
  return (
    <div
      className="meal"
      onClick={() => {
        console.log(title, price);
        const article = cart.find((a) => a.title === title);
        // console.log(article);
        // article && console.log(article.qty);
        if (article) {
          cart.map((meal) => {
            if (meal.title === title) {
              meal.qty++;
            }
          });
        } else {
          const newCart = [...cart];
          newCart.push({ title: title, qty: 1, price: price });
          setCart(newCart);
        }
      }}
    >
      <div className="left-div">
        <h2 className="title-meal">{title}</h2>
        <div className="desc-meal">{description}</div>
        <div className="price-meal">
          {price} €{" "}
          {popular ? <div className="pop-meal">✅ Populaire</div> : null}
        </div>
      </div>
      <div className="right-div">
        {picture ? (
          <img className="picmeal" src={picture} alt="imagedunplat" />
        ) : null}
      </div>
    </div>
  );
};

export default Meal;

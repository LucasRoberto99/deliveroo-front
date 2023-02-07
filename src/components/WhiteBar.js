const WhiteBar = ({ title, description, img }) => {
  return (
    <div className="whitebar">
      <div className="insidewbar">
        <div className="wleft">
          <h1 className="titlewbar">{title}</h1>{" "}
          <div className="descriptionwbar">{description}</div>
        </div>

        <img className="imgtoprightwbar" src={img} alt="photoTopright" />
      </div>
    </div>
  );
};

export default WhiteBar;

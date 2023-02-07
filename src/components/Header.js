import logo from "../img/images/favicon-32x32.png";

const Header = () => {
  return (
    <header>
      <div className="topbarCenter">
        <img className="imgLogo" src={logo} alt="logoDeliveroo" />
        <span>deliveroo</span>
      </div>
    </header>
  );
};

export default Header;

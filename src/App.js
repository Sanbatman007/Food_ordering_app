import logo from "./CompanyLogo.png";
import "./App.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} className="logo-image" />
      </div>
      <div>
        <ul className="header-list">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


const RestroCard = () => {
  return (
    <div>Card goes here</div>
  );
}
const Body = () => {
  return (
    <div className="body">
      <div className="search-container">Search Goes here</div>
      <div className="resto-container">
        <RestroCard/>
      </div>
    </div>
  );
  
};

function App() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

export default App;

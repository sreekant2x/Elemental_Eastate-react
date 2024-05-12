import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>Embark on a journey with us to find your dream place. We offer an extensive selection of real estate options, meticulously curated to match your unique preferences, ensuring a smooth and satisfying home-finding experience.</p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years Of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gains</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}
export default HomePage;

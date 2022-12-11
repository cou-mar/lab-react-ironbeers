import { NavLink } from "react-router-dom";
import BeersPic from "../assets/beers.png";
import NewBeerPic from "../assets/new-beer.png";
import RandomBeerPic from "../assets/random-beer.png";

const Home = () => {
  return (
    <div>
      <h1>Welcome to IronBeers</h1>

      <div>
        <div>
          <NavLink to="/listbeers">
            <img src={BeersPic} alt="beers" className="homePhotos" />
            <h2 className="introCards">List of Beers</h2>
            <p className="introCards">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
              culpa inventore ad sunt reiciendis qui. Voluptate, nam! Laudantium
              neque dignissimos assumenda sint dolorum voluptate possimus
              repellendus optio fuga est. Provident.
            </p>
          </NavLink>
        </div>

        <div>
          <NavLink to="/newbeer">
            <img src={NewBeerPic} alt="new beer" className="homePhotos" />
            <h2 className="introCards">New Beer</h2>
            <p className="introCards">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              libero vel ipsum ducimus maxime quod voluptates debitis quam iusto
              at. Quibusdam, omnis. Ipsa repellendus assumenda quasi debitis
              perspiciatis aspernatur consequuntur.
            </p>
          </NavLink>
        </div>

        <div>
          <NavLink to="/randombeer">
            <img src={RandomBeerPic} alt="random beer" className="homePhotos" />
            <h2 className="introCards">Random Beer</h2>
            <p className="introCards">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              minus molestiae molestias sapiente impedit esse quis explicabo
              illo asperiores hic repudiandae, a, pariatur, quod ratione facilis
              aliquid ut! Quisquam, repellendus?
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;

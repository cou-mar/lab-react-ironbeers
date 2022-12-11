import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const ListBeers = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((axiosResponse) => {
        console.log(axiosResponse.data);
        setList(axiosResponse.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavBar />

      <h3 className="listTitle">List of All Beers</h3>
      <div className="eachBeerDisplay">
        {list.map((singleBeer) => {
          return (
            <NavLink to={`/${singleBeer._id}`}>
              <div className="beerContainer" key={singleBeer._id}>
                <img src={singleBeer.image_url} alt="" className="beerPic" />
                <h4>{singleBeer.name}</h4>
                <h5>{singleBeer.tagline}</h5>
                <p>{singleBeer.contributed_by}</p>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default ListBeers;

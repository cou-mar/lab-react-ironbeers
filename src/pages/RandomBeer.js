import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RandomBeer = () => {

    const {id} = useParams();
    console.log(id);

    const [randomBeer, setRandomBeer] = useState(null);

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then((axiosResponse) => {
            setRandomBeer(axiosResponse.data);
        })
        .catch(err => console.log(err))
    }, [id]);

    return (
        <div>
           <NavBar /> 

           {randomBeer ? (
                <div className="oneBeer"> 
                    <h3>Randomized Beer:</h3>
                    <img src={randomBeer.image_url} alt="random beer" className="beerPic" />
                    <h2>{randomBeer.name}</h2>
                    <h3>{randomBeer.tagline}</h3>
                    <h4>{randomBeer.first_brewed}</h4>
                    <h5>{randomBeer.attenuation_level}</h5>
                    <p>{randomBeer.description}</p>
                    <h5>{randomBeer.contribute_by}</h5>
                </div>
           ) : (
            <p>loading a random beer from the list...</p>
           )}
        </div>
    );
}

export default RandomBeer;
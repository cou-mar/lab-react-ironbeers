import NavBar from "../components/NavBar";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleBeer = () => {

    //get param
    const {id} = useParams()
    const [beerDetail, setBeerDetail] = useState(null)

    //useEffect with param to retrieve single beer by id
    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then(axiosResponse => {
            //set state with beer object
            setBeerDetail(axiosResponse.data)
        })
        .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            <NavBar />
            
        {beerDetail ? ( 
            <div key={beerDetail._id} className="oneBeer">
                <img src={beerDetail.image_url} alt="beer" className="beerPic" />
                <h2>{beerDetail.name}</h2>
                <h3>{beerDetail.tagline}</h3>
                <h4>{beerDetail.first_brewed}</h4>
                <h5>{beerDetail.attenuation_level}</h5>
                <p>{beerDetail.description}</p>
                <h5>{beerDetail.contribute_by}</h5>
            </div>
            ) : <p>loading your beer...</p>}
        </div>
    );
}

export default SingleBeer;
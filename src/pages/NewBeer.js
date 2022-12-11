import NavBar from "../components/NavBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewBeer = () => {
    
    const navigate = useNavigate();

    const [newBeer, setNewBeer] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_leve: 0,
        contributed_by: "",
    });
    
    const updateList = (event) => setNewBeer({
        ...NewBeer, 
        [event.target.name]: event.target.value
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
            name: newBeer.name,
            tagline: newBeer.tagline,
            description: newBeer.description,
            first_brewed: newBeer.first_brewed,
            brewers_tips: newBeer.brewers_tips,
            attenuation_level: newBeer.attenuation_level,
            contributed_by: newBeer.contributed_by,
        })
        .then((axiosResponse) => {
            console.log(axiosResponse.data);
            navigate('/');
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <NavBar />

            <div className="addNew">
                <h3>Add New Beer</h3>
                <form onSubmit={handleSubmit}>
                    <label>Name</label><br />
                    <input name="name" value={newBeer.name} onChange={setNewBeer} />
                <br />
                    <label>Tagline</label><br />
                    <input name="tagline" value={newBeer.tagline} onChange={setNewBeer} />
                <br />
                    <label>Description</label><br />
                    <input name="description" value={newBeer.description} onChange={setNewBeer} />
                <br />              
                    <label>First Brewed</label><br />
                    <input name="first_brewed" value={newBeer.first_brewed} onChange={setNewBeer} />
                <br />
                    <label>Brewer Tips</label><br />
                    <input name="brewers_tips" value={newBeer.brewers_tips} onChange={setNewBeer} />
                <br />
                    <label>Attenuation Level</label><br />
                    <input name="attenuation_level" value={newBeer.attenuation_level} onChange={setNewBeer} />
                <br />
                    <label>Contributed By</label><br />
                    <input name="contributed_by" value={newBeer.contributed_by} onChange={setNewBeer} />
                <br />
                    <button className="addNewBttn">List New Beer</button>
                </form>
            </div>
        </div>
    );
}

export default NewBeer;
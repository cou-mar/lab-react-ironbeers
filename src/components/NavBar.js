import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div  >
            <NavLink to="/">
               <header>
               <i className="far fa-home-heart"></i>
               </header>                
            </NavLink>
        </div>
    );
}

export default NavBar;
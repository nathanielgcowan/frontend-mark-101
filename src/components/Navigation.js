import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <h1>Header Component</h1>
            <NavLink to="/">Home</NavLink>{' '}
            <NavLink to="/bands">Bands</NavLink>{' '}
            <NavLink to="bands/favorite-band">Favorite Band</NavLink>{' '}
            <NavLink to="bands/least-favorite-band">Least Favorite Band</NavLink>{' '}
            <NavLink to="/about">About</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </div>
    );
};

export default Navigation;
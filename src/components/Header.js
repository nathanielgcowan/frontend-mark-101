import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <h1>Header Component</h1>
            <NavLink to="/bands">Bands</NavLink>{' '}
            <NavLink to="bands/favorite-band">Favorite Band</NavLink>{' '}
            <NavLink to="bands/least-favorite-band">Least Favorite Band</NavLink>{' '}
            <NavLink to="/about">About</NavLink>
        </div>
    );
};

export default Header;
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <h1>Header Component</h1>
            <NavLink to="/">Bands</NavLink>{' '}
            <NavLink to="/favorite-band">Favorite Band</NavLink>{' '}
            <NavLink to="/least-favorite-band">Least Favorite Band</NavLink>{' '}
            <NavLink to="/about">About</NavLink>
        </div>
    );
};

export default Header;
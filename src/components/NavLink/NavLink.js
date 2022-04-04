import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = (props) => {
    const { name, link } = props.route;
    return (
        <div>
            <li className='mr-12'><Link to={link}>{name}</Link> </li>
        </div>
    );
};

export default NavLink;
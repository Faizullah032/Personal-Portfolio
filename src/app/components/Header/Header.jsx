import React from 'react';
import 'boxicons/css/boxicons.min.css';
import { navItems } from '../../utils/NavData/navItems';


function Header() {
    return (
        <nav className="nav">
            <ul className="nav-list">
                {navItems.map((item, index) => (
                    <li key={index} className={index === 0 ? 'active' : ''}>
                        <i className={item.icon}></i>
                        <span className="tooltip">{item.tooltip}</span>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Header;


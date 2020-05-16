import React from 'react'
import { Link } from 'react-router-dom'

function NavigationMenu(props) {
    return (
        <div>
            <div className="font-bold">
                My React App
            </div>
            <ul>
                <li>
                    <Link 
                    className="text-blue-500 py-3 border-t border-b block"
                    to="/"
                    onClick={props.closeMenu}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                    className="text-blue-500 py-3 border-b block"
                    to="/about"
                    onClick={props.closeMenu}>About</Link>
                </li>
                </ul>
        </div>
    )
}

export default NavigationMenu;
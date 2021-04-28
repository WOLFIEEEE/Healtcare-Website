import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
// import Iframe from 'react-iframe'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/models">Models</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/generic">About</Link></li>
            </ul>
            <ul className="actions vertical">
            <li><Link onClick={props.onToggleMenu} to="/elements" className="button special fit">Add your Model</Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu

import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <ul className="link-bar">
        <li><Link to="/" className="nav-link"></Link></li>
        <li><Link to="/tv-shows" className="nav-link"></Link></li>
        <li><Link to="/movies" className="nav-link"></Link></li>
        <li><Link to="/recently-added" className="nav-link"></Link></li>
        <li><Link to="/my-list" className="nav-link"></Link></li>
        <li><Link to="/list-item" className="nav-link"></Link></li>
        <li><Link to="/*" className="nav-link"></Link></li>
        <li><Link to="/links" className="nav-link"></Link></li>
        <li><Link to="/movie-item" className="nav-link"></Link></li>
    </ul>
)
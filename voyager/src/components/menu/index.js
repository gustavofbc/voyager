import React from 'react';

import logo from '../../assets/Logo.svg';
import briefcase from '../../assets/icons/briefcase.svg';
import calendar from '../../assets/icons/calendar.svg';
import airplane from '../../assets/icons/airplane.svg';

import "./styles.css";

export default function Menu(){
    return (
        <nav className="navegation">
        <a href="#">
            <img className="logo" src={logo} alt="Voyager logo"/>
        </a>

        <ul className="menu-options">
            <li>
                <a className="option">
                    <img src={airplane} alt="airplane"/> Passagens
                </a>
            </li>
            <li>
                <a className="option">
                    <img src={briefcase} alt="briefcase"/> Hospedagem
                </a>
            </li>
        </ul>
    </nav>
    )
}

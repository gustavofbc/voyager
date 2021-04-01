import React from 'react';
import logo from '../../assets/Logo.svg';
import briefcase from '../../assets/icons/briefcase.svg';
import calendar from '../../assets/icons/calendar.svg';
import airplane from '../../assets/icons/airplane.svg';

import "./styles.css";

export default function Apresentation() {
    return (
        <div className="cointainer">
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
            
            <h2>
                Viajar é <span className="memories">criar memórias</span> pelo mundo! 
            </h2>

            <div className="sections">
                <section>
                    <select>
                        <option id="0">Origem</option>
                    </select>

                    <label for="ida">Data: 
                        <input type="date" id="ida"/>
                    </label>
                </section>

                <section>
                    <select>
                        <option id="0">Destino</option>
                    </select>

                    <label for="volta">Data: 
                        <input type="date" id="volta"/>
                    </label>
                </section>

                <button>Buscar</button>
            </div>

            <div className="form-options">
                <div className="radios">
                    <label for="ida_e_volta">
                        <input type="radio" id="ida_e_volta" name="ida_e_volta" value="ida_e_volta"/>Ida e volta
                    </label>
                    <label for="somente_ida">
                        <input type="radio" id="somente_ida" name="somente_ida" value="somente_ida"/>Somente ida
                    </label>
                </div>

                <br/>

                <div>
                    <input className="quantidade" type="number"/>
                </div>
            </div>



            <footer>
                <div className="direitos">
                    <span>© Todos os direitos reservados.</span>
                </div>
            </footer>

        </div>
    );
}
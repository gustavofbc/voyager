import React from 'react';
import logo from '../../assets/Logo.svg'

import "./styles.css";

export default function Apresentation() {
    return (
        <div className="cointainer">
            <nav>
                <a className="" href="#">
                    <img src={logo} alt="Voyager logo"/>
                </a>

                <ul>
                    
                </ul>
            </nav>
            
            <h2>
                Viajar é <span>criar memórias</span> pelo mundo! 
            </h2>

            <div className="radios">
                <label for="ida_e_volta">
                    <input type="radio" id="ida_e_volta" name="ida_e_volta" value="ida_e_volta"/>Ida e volta
                </label>
                <label for="somente_ida">
                    <input type="radio" id="somente_ida" name="somente_ida" value="somente_ida"/>Somente ida
                </label>
            </div>

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

        </div>
    );
}
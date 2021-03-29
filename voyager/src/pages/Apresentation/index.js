import React from 'react';
import logo from '../../assets/Logo.svg'

import "./styles.css";

export default function Apresentation() {
    return (
        <div className="cointainer">
            <img src={logo} alt="Voyager logo"/>
            
            <h2>
                Encontre o voo ideal para sua viagem!
            </h2>

            <div className="sections">
                <section>
                    <select>
                        <option id="0">Selecione a origem</option>
                    </select>

                    <label for="ida">Data: 
                        <input type="date" id="ida"/>
                    </label>
                </section>

                <section>
                    <select>
                        <option id="0">Selecione o destino</option>
                    </select>

                    <label for="volta">Data: 
                        <input type="date" id="volta"/>
                    </label>
                </section>
            </div>

        </div>
    );
}
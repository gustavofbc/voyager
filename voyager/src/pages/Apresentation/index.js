import React, { useState, useEffect } from 'react';

import "./styles.css";

export default function Apresentation() {
    const [origem, setOrigem] = useState('');
    const [destino, setDestino] = useState('');
    const [dataOrigem, setDataOrigem] = useState('');
    const [dataDestino, setDataDestino] = useState('');

    const [verify, setVerify] = useState(true);

        function toggleModal(){
            document.querySelector('.modal-overlay').classList.toggle('active');
        }

    return (
        <div className="cointainer">
            
            <h2>
                Viajar é <span className="memories">criar memórias</span> pelo mundo! 
            </h2>
            <form >
                <div className="sections">
                    <section>
                        <select required>
                            <option value="">Origem</option>
                            <option value="0">teste</option>
                        </select>

                        <label for="ida">
                            <input type="date" id="ida" required/>
                        </label>
                    </section>

                    <section>
                        <select required>
                            <option value="">Destino</option>
                            <option value="0">teste</option>
                        </select>

                        {verify ? <label for="volta">
                            <input type="date" id="volta" required/>
                        </label> : ''}
                    </section>

                    <button onClick={() => toggleModal()}>Buscar</button>
                </div>

                <div className="form-options">
                    <div className="radios">
                        <label for="ida_e_volta">
                            <input type="radio" id="tipo_de_passagem" name="tipo_de_passagem" value="ida_e_volta"  onChange={() => setVerify(true)} required/>Ida e volta
                        </label>
                        <label for="somente_ida">
                            <input type="radio" id="tipo_de_passagem" name="tipo_de_passagem" value="somente_ida" onChange={() => setVerify(false)} required/>Somente ida
                        </label>
                    </div>

                    <br/>

                    <div className="form-selects">
                        <select id="adulto" required>
                            <option value="">0 Adulto</option>
                            <option id="1" value="1">1 Adulto</option>
                            <option id="2" value="2">2 Adultos</option>
                            <option id="3" value="3">3 Adultos</option>
                            <option id="4" value="4">4 Adultos</option>
                            <option id="5" value="5">5 Adultos</option>
                            <option id="6" value="6">6 Adultos</option>
                            <option id="7" value="7">7 Adultos</option>
                            <option id="8" value="8">8 Adultos</option>
                            <option id="9" value="9">9 Adultos</option>
                            <option id="10" value="10">10 Adultos</option>
                        </select>

                        <select id="criança">
                            <option id="0" value="0">0 Criança</option>
                            <option id="1" value="1">1 Criança</option>
                            <option id="2" value="2">2 Crianças</option>
                            <option id="3" value="3">3 Crianças</option>
                            <option id="4" value="4">4 Crianças</option>
                            <option id="5" value="5">5 Crianças</option>
                            <option id="6" value="6">6 Crianças</option>
                            <option id="7" value="7">7 Crianças</option>
                            <option id="8" value="8">8 Crianças</option>
                            <option id="9" value="9">9 Crianças</option>
                            <option id="10" value="10">10 Crianças</option>
                        </select>

                        <select id="bebe">
                            <option id="0" value="0">0 Bebê</option>
                            <option id="1" value="1">1 Bebê</option>
                            <option id="2" value="2">2 Bebês</option>
                            <option id="3" value="3">3 Bebês</option>
                            <option id="4" value="4">4 Bebês</option>
                            <option id="5" value="5">5 Bebês</option>
                            <option id="6" value="6">6 Bebês</option>
                            <option id="7" value="7">7 Bebês</option>
                            <option id="8" value="8">8 Bebês</option>
                            <option id="9" value="9">9 Bebês</option>
                            <option id="10" value="10">10 Bebês</option>
                        </select>
                    </div>
                </div>
            </form>

            <div className="modal-overlay">
                <div className="modal">
                    <ul>
                        <li>voo 1</li>
                        <li>voo 2</li>
                        <li>voo 3</li>
                        <li>voo 4</li>
                        <li>voo 5</li>
                        <li>voo 6</li>
                    </ul>
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
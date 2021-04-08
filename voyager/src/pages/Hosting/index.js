import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import "./styles.css";

export default function Hosting() {
    const [origem, setOrigem] = useState('');

    const [hoteis, setHoteis] = useState([]);
    const [tickets, setTickets] = useState([]);
    const [search, setSearch] = useState([]);
    const [total, setTotal] = useState(0);
    const [parcelas, setParcelas] = useState(0);

    const [content, setContent] = useState(true);
    const [days, setDays] = useState(0);
    const [days2, setDays2] = useState(0);
    const [countDays, setCountDays] = useState(0);
    const [quartos, setQuartos] = useState(0);

    async function loadHoteis() {
        const response = await api.get('hostingPurchase');
        
        setHoteis(response.data.hoteis);
    };

    // async function loadTickets() {
        
    //     let response = await api.get(`flightSearch`, {
    //         params: {
    //             search: search
    //         }
    //     });

    //     setTickets(response.data);
    // }

    function buy() {
        alert('Compra efetuada com sucesso!');
        window.location.reload();
    }

    useEffect(() => {
        loadHoteis();
      },  []);

    //   useEffect(() => {
    //     loadTickets();
    //   },  [search]);

    function toggleModal(){
        document.querySelector('.modal-overlay').classList.toggle('active');
    }



    function totalPay(e) {
        setParcelas(e);
        let aux = (countDays * 300) * quartos;
        aux = aux / e;
        setTotal(aux);
    }

    
    function getDays() {
        let aux = String(days).split('-');
        let aux2 = String(days2).split('-');
        let aux3 = Number(aux2[2]) - Number(aux[2]);
        
        setCountDays(aux3);
    }

    return (
        <div className="cointainer">
            
            <h2>
                Viajar é <span className="memories">criar memórias</span> pelo mundo! 
            </h2>

            <form onSubmit={(e) => {
                e.preventDefault();
                toggleModal();
                getDays();
            }}>
                <div className="sections">
                    <section>
                        <select required onChange={(e) => {setOrigem(e.target.value)}}>
                            <option value="">Hoteis</option>
                            {hoteis && hoteis.map(hotel => (<option value={hotel.id}>{hotel.name}</option>))}
                        </select>
                    </section>

                    <section>
                        <label for="ida">
                            <input type="date" id="ida" onChange={(e) => setDays(e.target.value)} required/>
                        </label>

                        <label for="volta">
                            <input type="date" id="volta" onChange={(e) => setDays2(e.target.value)} required/>
                        </label>
                    </section>

                    <button type="submit">Comprar</button>
                </div>

                <div className="form-options">
                    <label for="card" className="input-quartos">
                        <input type="number" id="card" placeholder="Quantidade de quartos" onChange={(e) => setQuartos(e.target.value)} required/>
                    </label>

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
                {
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            buy();
                        }}>
                        <div>
                            <div className="labels">
                                <label for="card" className="input-card">
                                    N° do Cartão: <input type="number" id="card" required/>
                                </label>
                                <label for="card" className="input-card">
                                    Cód.: <input type="number" id="card" required/>
                                </label>

                                <label for="card" className="input-card">
                                    Qtd. de parcelas: <input type="number" id="card" onChange={(e) => totalPay(e.target.value)} required/>
                                </label>
                                <label for="total" className="input-card">
                                    Total a pagar: <input type="text" value={`${total}`} id="total"  disabled/>
                                </label>
                            </div>

                            <div className="buttons">
                                <a href="#" class="button cancel" onClick={() => window.location.reload()}>Cancelar</a>
                                <button type="submit" class="button buy">Confirmar</button>
                            </div>
                        </div>
                        </form>
                    }
                    
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
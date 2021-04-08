import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import airplane_up from '../../assets/icons/airplane_up.svg';
import airplane_down  from '../../assets/icons/airplane_down.svg';

import "./styles.css";

export default function Apresentation() {
    const [origem, setOrigem] = useState('');
    const [destino, setDestino] = useState('');
    const [total, setTotal] = useState(0);
    const [pessoas, setPessoas] = useState(0);
    const [parcelas, setParcelas] = useState(1);

    const [cities, setCities] = useState([]);
    const [tickets, setTickets] = useState([]);
    const [tickets2, setTickets2] = useState([]);
    const [search, setSearch] = useState([]);
    const [search2, setSearch2] = useState([]);

    const [verify, setVerify] = useState(true);
    const [content, setContent] = useState(1);

    async function loadCities() {
        const response = await api.get('ticketPurchase');
        
        setCities(response.data.cities);
    };

    async function loadTickets() {
        
        let response = await api.get(`flightSearch`, {
            params: {
                search: search
            }
        });

        setTickets(response.data);

        response = await api.get(`flightSearch`, {
            params: {
                search: search2
            }
        });

        setTickets2(response.data);
    }

    function buy() {
        alert('Compra efetuada com sucesso!');
        window.location.reload();
    }

    useEffect(() => {
        loadCities();
      },  []);

      useEffect(() => {
        loadTickets();
      },  [search]);

    function toggleModal(){
        document.querySelector('.modal-overlay').classList.toggle('active');
    }

    function switchToggle() {
        if(verify) {
            switchToggleFly();
        } else {
           setContent(3);
        }
    }

    function  switchToggleFly() {
        if(content == 1) {
            setContent(2);
        } else if(content == 2){
            setContent(1);
        }
    }

    function peopleCount(e) {
        const aux = pessoas + Number(e);
        setPessoas(aux);
    }

    function totalPay(e) {
        setParcelas(e);
        if(verify){
            let aux = pessoas * 600;
            aux = aux / e;
            setTotal(aux);
        } else {
            let aux = pessoas * 300;
            aux = aux / e;
            setTotal(aux);
        }
    }

    return (
        <div className="cointainer">
            
            <h2>
                Viajar é <span className="memories">criar memórias</span> pelo mundo! 
            </h2>

            <form onSubmit={(e) => {
                e.preventDefault();
                toggleModal();
                setSearch(`${origem}x${destino}`);
                setSearch2(`${destino}x${origem}`);
            }}>
                <div className="sections">
                    <section>
                        <select required onChange={(e) => {setOrigem(e.target.value)}}>
                            <option value="">Origem</option>
                            {cities && cities.map(city => (<option value={city.id}>{city.name}</option>))}
                        </select>

                        <label for="ida">
                            <input type="date" id="ida" required/>
                        </label>
                    </section>

                    <section>
                        <select required onChange={(e) => {setDestino(e.target.value)}}>
                            <option value="">Destino</option>
                            {cities && cities.map(city => (<option value={city.id}>{city.name}</option>))}
                        </select>

                        {verify ? <label for="volta">
                            <input type="date" id="volta" required/>
                        </label> : ''}
                    </section>

                    <button type="submit">Buscar</button>
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
                        <select id="adulto" onChange={(e) => peopleCount(e.target.value)} required>
                            <option value="">0 Adulto</option>
                            <option id="1" value='1'>1 Adulto</option>
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

                        <select id="criança" onChange={(e) => peopleCount(e.target.value)} required>
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

                        <select id="bebe" onChange={(e) => peopleCount(e.target.value)} required>
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
                        content == 1 ?
                        <>
                            <ul>
                                {tickets && tickets.map(ticket => (
                                <li value={ticket.flight}>
                                    <div className="ticket-container">
                                        <div className="option-ticket">
                                            <p>{ticket.departure_time}
                                                <img src={airplane_up} alt="airplane"/>{ticket.origin}  para {ticket.destiny}<img src={airplane_down} alt="airplane"/>
                                            {ticket.arrival_time}
                                            </p>    
                                        </div>
                                        <div className="buy-ticket">
                                            <span>R$ {ticket.value}</span>
                                            <a className='button buy' onClick={() => switchToggle()}>Próximo</a>
                                        </div>
                                    </div>
                                </li>))
                                }
                            </ul>
                            <a href="#" class="button cancel" onClick={() => toggleModal()}>Cancelar</a>
                        </>
                        : content == 2 ?
                        <>
                            <ul>
                                {tickets2 && tickets2.map(ticket2 => (
                                <li value={ticket2.flight}>
                                    <div className="ticket-container">
                                        <div className="option-ticket">
                                            <p>{ticket2.departure_time}
                                                <img src={airplane_up} alt="airplane"/>{ticket2.origin}  para {ticket2.destiny}<img src={airplane_down} alt="airplane"/>
                                            {ticket2.arrival_time}
                                            </p>    
                                        </div>
                                        <div className="buy-ticket">
                                            <span>R$ {ticket2.value}</span>
                                            <a className='button buy' onClick={() => setContent(3)}>Comprar</a>
                                        </div>
                                    </div>
                                </li>))
                                }
                            </ul>
                            <a href="#" class="button return" onClick={() => switchToggle()}>Voltar</a>
                        </>
                        : content == 3 ?
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
                                    Total a pagar: <input type="text" value={`${parcelas} X ${total}`} id="total"  disabled/>
                                </label>
                            </div>

                            <div className="buttons">
                                <a href="#" class="button cancel" onClick={() => setContent(true)}>Cancelar</a>
                                <button type="submit" class="button buy">Confirmar</button>
                            </div>
                        </div>
                        </form>
                        : ''
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
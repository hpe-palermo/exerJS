import React from 'react'

const Cards = () => {
    return (
        <div>
            <div id="sobre" className="container-fluid bg-dark pb-3 mt-3">
                <h1 className="text-center text-white pt-5 pb-5">O que oferecemos?</h1>
                <div className="row">

                    <section className="sec-1 col-md-4 col-sm-12 mb-3 pe-5 ps-5">
                        <div id="linear-gradient" className="card border-0">
                            <div className="text-center py-3 pb-1">
                                <i className="bi bi-folder text-primary p-2 rounded-circle"
                                    id="estilo-card"></i>
                            </div>
                            <div className="card-body text-light">
                                <h5 className="card-title text-center">Projetos</h5>
                                <p className="card-text text-center">Gerencie seus projetos junto a seus colegas</p>
                            </div>
                        </div>
                    </section>

                    <section className="sec-1 col-md-4 col-sm-12 mb-3 pe-5 ps-5">
                        <div id="linear-gradient" className="card border-0">
                            <div className="text-center py-3 pb-1">
                                <i className="bi bi-arrow-counterclockwise text-primary p-2 rounded-circle"
                                    id="estilo-card"></i>
                            </div>
                            <div className="card-body text-light">
                                <h5 className="card-title text-center">Scrum</h5>
                                <p className="card-text text-center">Aprenda a metodologia Scrum</p>
                            </div>
                        </div>
                    </section>

                    <section className="sec-1 col-md-4 col-sm-12 mb-3 pe-5 ps-5">
                        <div id="linear-gradient" className="card border-0">
                            <div className="text-center py-3 pb-1">
                                <i className="bi bi-people text-primary p-2 rounded-circle"
                                    id="estilo-card"></i>
                            </div>
                            <div className="card-body text-light">
                                <h5 className="card-title text-center">Equipes</h5>
                                <p className="card-text text-center">Convide seus colegas para seus projetos.</p>
                            </div>
                        </div>
                    </section>

                    <section className="sec-1 col-md-4 col-sm-12 mb-3 pe-5 ps-5">
                        <div id="linear-gradient" className="card border-0">
                            <div className="text-center py-3 pb-1">
                                <i className="bi bi-bar-chart text-primary p-2 rounded-circle"
                                    id="estilo-card"></i>
                            </div>
                            <div className="card-body text-light">
                                <h5 className="card-title text-center">Dashboard</h5>
                                <p className="card-text text-center">Acompanhe o seu andamento no decorrer do projeto.</p>
                            </div>
                        </div>
                    </section>

                    <section className="sec-1 col-md-4 col-sm-12 mb-3 pe-5 ps-5">
                        <div id="linear-gradient" className="card border-0">
                            <div className="text-center py-3 pb-1">
                                <i className="bi bi-calendar3 text-primary p-2 rounded-circle"
                                    id="estilo-card"></i>
                            </div>
                            <div className="card-body text-light">
                                <h5 className="card-title text-center">Faça anotações</h5>
                                <p className="card-text text-center">Registre seu progresso de cada dia.</p>
                            </div>
                        </div>
                    </section>

                    <section className="sec-1 col-md-4 col-sm-12 mb-3 pe-5 ps-5">
                        <div id="linear-gradient" className="card border-0">
                            <div className="text-center py-3 pb-1">
                                <i className="bi bi-chat text-primary p-2 rounded-circle"
                                    id="estilo-card"></i>
                            </div>
                            <div className="card-body text-light p-2">
                                <h5 className="card-title text-center">Chat</h5>
                                <p className="card-text text-center">
                                    Com nosso sistema de comunicação integrado, facilitamos a colaboração da equipes
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Cards;
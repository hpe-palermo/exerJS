import React from 'react'

const Header = () => {
    return (
        <div>
            <header id="img-home" className="container-fluid d-flex align-items-center justify-content-center pt-3">
                <div className="row">
                    <div className="col-12">
                        <h1 id="titulo" className="text-center text-light fadeInLeft">
                            Gerencie <span className="text-primary">seus projetos</span> com o <br/>Planning Tasks
                        </h1>
                        <p id="descricao" className="lead text-center text-light fadeInRight">
                            Ferramenta simples para o gerencimento de projetos e tarefas em equipes.
                        </p>
                        <div className="mt-5 text-center">
                            <a id="btn" href="#" className="btn btn-primary btn-lg" type="submit">Comece já</a>
                        </div>
                    </div>
                </div>
            </header>
        </div >
    );
}

export default Header;
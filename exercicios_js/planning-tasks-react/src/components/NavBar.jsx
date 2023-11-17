import React from 'react'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark shadow sticky-top">
                <div className="container">
                    <a className="navbar-brand text-primary" href="#"><strong>Planning Tasks</strong></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="bi bi-list text-light pt-1"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-light active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#sobre">Sobre</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#contato">Contato</a>
                            </li>
                        </ul>
                        <a href="#" class="btn btn-primary">Login</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
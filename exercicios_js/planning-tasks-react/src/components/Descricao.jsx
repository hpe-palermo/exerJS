import React from 'react'

const Descricao = () => {
    return (
        <div>
            <div className='my-5'>
                <section className="sec-2">
                    <h2 className="text-light text-center">
                        Aprenda a metodologia Scrum
                    </h2>
                </section>

                <section className="sec-3">
                    <p id="paragrafo" className="text-light text-center mt-5">
                        O Planning Tasks é uma plataforma que auxiliará você fazer um gerenciamento eficiente e prático
                        de seus <br /> projetos e tarefas apresentando recursos intuitivos que permitem que você
                        organize suas tarefas.
                    </p>
                </section>

                <div className="text-center mt-4">
                    <a href="#sobre" className="text-light btn btn-primary btn-lg rounded-pill">
                        Saiba mais
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Descricao;
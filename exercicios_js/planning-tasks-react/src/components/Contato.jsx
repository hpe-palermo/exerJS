import React from 'react'

const Contato = () => {
    return (
        <div>
            <div id="contato" className="row container-fluid mt-0 mb-5 py-4">
                <div className="col-md-6 col-sm-12">
                    <h1 className="text-center text-white py-3 m-5 mb-3">Contato</h1>
                    <p className="lead text-center text-md-center mt-3 text-white">
                        Você tem dúvidas sobre o uso da plataforma ou deseja relatar algum problema encontrado?
                        Contate-nos!
                    </p>
                </div>
                <div className="col-md-6 col-sm-12">
                    <form action="#" method="post" className="text-white">
                        <div className="mb-3">
                            <label for="" className="form-label">Nome</label>
                            <input type="text" name="nome" className="form-control" placeholder="Seu nome"/>
                        </div>
                        <div className="mb-3">
                            <div>
                                <label for="" className="form-label">Sua mensagem</label>
                            </div>
                            <div>
                                <textarea className="w-100 form-control" name="mensagem" cols="30" rows="10"
                                    placeholder="Conte-nos o que está achando do site!"></textarea>
                            </div>
                        </div>

                        <input id="avaliacao" name="avaliacao" type="hidden" value="Regular"/>
                            <div className="text-center">
                                <button type="submit" class="btn btn-primary">Enviar Mensagem</button>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contato;
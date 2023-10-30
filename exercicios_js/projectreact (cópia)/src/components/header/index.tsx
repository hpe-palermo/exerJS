import logo from "../../assets/logo.svg"
import { Container } from "./styles";

export function Header() {
    return (
        <Container>
            <div>
                <h1>Pedidos</h1>
                <h2>Acompanhamento de Pedidos</h2>
                <img src={logo} alt="aaa" />
            </div>
        </Container>

    )
}
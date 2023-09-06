import iconUpImg from '../../assets/Icons up.svg'
import iconDowImg from '../../assets/Icons down.svg'
import iconMoneyImg from '../../assets/money.svg'

import { Container } from "./styles";


export function Summary() {

    return (
        <Container>

            <div>
                <header>
                    <p>Entradas</p>
                    <img src={iconUpImg} alt="icone entrada" />
                </header>
                <strong>1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={iconDowImg} alt="icone saída" />
                </header>
                <strong>-500,00</strong>
            </div>
            <div className='total'>
                <header>
                    <p>Total</p>
                    <img src={iconMoneyImg} alt="icone Total" />
                </header>
                <strong>500,00</strong>
            </div>

        </Container>
    )
}
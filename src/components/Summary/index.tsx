import { useContext } from 'react';

import iconUpImg from '../../assets/Icons up.svg'
import iconDowImg from '../../assets/Icons down.svg'
import iconMoneyImg from '../../assets/money.svg'

import { Container } from "./styles";
import { TransactionsContext } from '../../TransactionsContext';


export function Summary() {

    const transactions = useContext(TransactionsContext);

    console.log(transactions)

    

    return (
        <Container>

            <div>
                <header>
                    <p>Entradas</p>
                    <img src={iconUpImg} alt="icone entrada" />
                </header>
                <strong>R$12.000.00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={iconDowImg} alt="icone saída" />
                </header>
                <strong>-R$500.00</strong>
            </div>
            <div className='total'>
                <header>
                    <p>Total</p>
                    <img src={iconMoneyImg} alt="icone Total" />
                </header>
                <strong>11.500.00</strong>
            </div>

        </Container>
    )
}
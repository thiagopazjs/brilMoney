import igniteImg from '../../assets/Ignite simbol.svg'
import { Container, Content } from './styles'


interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {


    return (

        <Container>
            <Content>
                <img src={igniteImg} alt="bril-money" /> <span>Bril Money</span>
                <button className='btn' type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>


            </Content>
        </Container>
    )

}
import igniteImg from '../../assets/Ignite simbol.svg'
import { Container, Content } from './styles'

export function Header() {

    return (

        <Container>
            <Content>
               <img src={igniteImg}  alt="bril-money"  /> <span>Bril Money</span> 
                <button type="button" >
                Nova transação
                </button>
            </Content>
        </Container>
    )

}
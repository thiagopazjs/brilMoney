import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import upImg from '../../assets/Icons up.svg'
import downImg from '../../assets/Icons down.svg'
import { Container, ContainerTransaction } from './styles';


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (

        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button type="button"
                onClick={onRequestClose}
                className='react-modal-close'
            >
                <img src={closeImg} alt='Fechar Modal' />


            </button>
            <Container>
                <h2>cadastrar transação</h2>


                <input

                    placeholder='Título'
                />

                <input
                    type='number'
                    placeholder='Valor'
                />



                <ContainerTransaction>
                    <button type="button">
                        <img src={upImg} alt="Entrada" />
                        <span>Entrada</span>
                    </button>

                    <button type="button">
                        <img src={downImg} alt="Saída" />
                        <span>Saída</span>
                    </button>

                </ContainerTransaction>
                <input

                    placeholder='Categoria'
                />

                <button type="submit">
                    Cadastrar
                </button>






            </Container>
        </Modal>

    )
}
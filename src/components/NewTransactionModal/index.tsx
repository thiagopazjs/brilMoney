import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import upImg from '../../assets/Icons up.svg'
import downImg from '../../assets/Icons down.svg'
import { Container, ContainerTransaction, RadioBox, } from './styles';
import { TransactionsContext } from '../../TransactionsContext';




interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}



export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    const { createTransaction } = useContext(TransactionsContext)

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        createTransaction({
            title,
            amount,
            category,
            type,
        })

    }

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
                <Container onSubmit={handleCreateNewTransaction}>
                    <h2>cadastrar transação</h2>


                    <input

                        placeholder='Título'
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />

                    <input
                        type='number'
                        placeholder='Valor'
                        value={amount}
                        onChange={event => setAmount(Number(event.target.value))}
                    />



                    <ContainerTransaction>
                        <RadioBox type="button"
                            onClick={() => { setType('deposit'); }}
                            isActive={type == 'deposit'}
                            isColorActive='green'
                        >
                            <img src={upImg} alt="Entrada" />
                            <span>Entrada</span>
                        </RadioBox>

                        <RadioBox type="button"
                            onClick={() => { setType('withdraw'); }}
                            isActive={type == 'withdraw'}
                            isColorActive='red'
                        >
                            <img src={downImg} alt="Saída" />
                            <span>Saída</span>
                        </RadioBox>

                    </ContainerTransaction>
                    <input

                        placeholder='Categoria'
                        value={category}
                        onChange={event => setCategory(event.target.value)}
                    />

                    <button type="submit">
                        Cadastrar
                    </button>






                </Container>
            </Modal>

        )
    }
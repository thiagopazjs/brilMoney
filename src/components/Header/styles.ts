import styled from 'styled-components';

export const Container = styled.header`

background: var(--black)


`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2.1rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content:space-between;

    span {
        color:white;
        margin-right: 46rem;
        width:7.25rem;
    }


    button {

        font-size: 1rem;
        background-color:var(--green);
        color:#FFF;
        background: var(--green);
        border:0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;
        
        &:hover{
            filter:brightness(0.9)
            
        }
        
    }
`;
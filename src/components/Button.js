import styled from 'styled-components';
import '../App.css';
import '../index.css';

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4em;
    background: transparent;
    color: var(--mainWhite);
    &:hover {
        background: var(--lightBlue);
        color: var(--mainBlue);
    }
`;

export const ButtonContainer2 = styled.button`
    text-transform: capitalize;
    font-size: 1.4em;
    background: grey;
    color: var(--mainWhite);
    &:hover {
        background: var(--lightBlue);
        color: var(--mainBlue);
    }
`;
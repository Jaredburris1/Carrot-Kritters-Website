import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const MintSection = styled.section`
    background: #8C8978;
    height: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    z-index: 1;
    overflow-x: hidden;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const MintContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const MintBg = styled.div`
    display: flex;
    position: sticky;
    justify-content: center;
`;

export const MintBtn = styled(LinkR)`
    border-radius: 50px;
    background: orange;
    white-space: nowrap;
    padding: 32px 96px;
    color: #010606;
    font-size: 20px;
    outline: none;
    border: none;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: -200px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;

export const MintCounter = styled.text`
    color: black;
    padding: 32px 32px;
    font-size: 25px;
    margin-right: -250px;
`;
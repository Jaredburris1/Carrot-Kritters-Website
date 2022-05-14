import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';


export const FooterSection = styled.footer`
    background: black;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    z-index: 1;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 300px;
    z-index: 1;
    width: 100%;
    max-width: 1920px;

    @media screen and (max-width: 450px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const FooterLogo = styled(LinkR)`
    display: flex;
    object-fit: contain;
    margin-top: 75px;
    height: 200px;
    width: 300px;

    @media screen and (max-width: 450px) {
        height: 150px;
        width: 150px;
        margin-top: 60px;
        margin-right: 100px;
    }
`;

export const FooterText = styled.text`
    display: flex;
    text-align: center;
    color: grey;
    margin-top: 250px;
    font-size: 15px;

    @media screen and (max-width: 450px) {
        margin-top: 0px;
        margin-bottom: 20px;
    }
`;

export const FooterDiscord = styled.div`
    display: flex;
    height: 300px;
    width: 300px;

    @media screen and (max-width: 670px) {
        display: none;
    }
`;
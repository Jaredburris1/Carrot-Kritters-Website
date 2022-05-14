import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: #8C8978;
    height: 80px;
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

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    object-fit: contain;
    display: flex;
    justify-self: flex-start;
    margin-left: -25px;

    @media screen and (max-width: 450px) {
        height: 85px;
        width: 85px;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 2rem;
        cursor: pointer;
        color: black;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    color: black;
    font-size: 20px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    color: black;
    font-size: 20px;

    &.active {
        border-bottom: 3px solid #ffa100;
    }
`;

export const NavBtnLink = styled(LinkR)`
    display: flex;
    align-items: center;
    text-decoration: none;
    list-style: none;
    margin-right: -22px;
    padding: 0rem;
    height: 100%;
    color: black;
    font-size: 20px;

    &.active {
        border-bottom: 3px solid #ffa100;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
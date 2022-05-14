import React from 'react';
import { 
    FaBars,
    FaInstagram,
    FaTwitter,
    FaDiscord,
    FaCarrot
} from 'react-icons/fa';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtnLink
} from './NavbarElements';
import ckLogo from '../../images/CKlogoT.png';


const Navbar = ( { toggle } ) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <img src={ckLogo} className="ckLogoT" alt="logo"/>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='Story'>Story</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='Roadmap'>Roadmap</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='Team'>Team</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='Funding'>Funding</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtnLink to='/Opensea'>
                        <FaCarrot />
                    </NavBtnLink>
                    <NavBtnLink to='/Discord'>
                        <FaDiscord />
                    </NavBtnLink>
                    <NavBtnLink to='/Twitter'>
                        <FaTwitter />
                    </NavBtnLink>
                    <NavBtnLink to='/Instagram'>
                        <FaInstagram />
                    </NavBtnLink>      
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar

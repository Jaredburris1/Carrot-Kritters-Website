import React from 'react';
import { 
    FaInstagram,
    FaTwitter,
    FaDiscord,
    FaCarrot
} from 'react-icons/fa';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute,
    SidebarSocials,
    SocialLink 
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="Story" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="Roadmap" onClick={toggle}>Roadmap</SidebarLink>
                    <SidebarLink to="Team" onClick={toggle}>Team</SidebarLink>
                    <SidebarLink to="Funding" onClick={toggle}>Funding</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="Connect">Connect Wallet</SidebarRoute>
                </SideBtnWrap>
                <SidebarSocials>
                    <SocialLink to='/Opensea'>
                        <FaCarrot />
                    </SocialLink>
                    <SocialLink to='/Discord'>
                        <FaDiscord />
                    </SocialLink>
                    <SocialLink to='/Twitter'>
                        <FaTwitter />
                    </SocialLink>
                    <SocialLink to='/Instagram'>
                        <FaInstagram />
                    </SocialLink>
                </SidebarSocials>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;

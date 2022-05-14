import React from 'react';
import { FaCopyright } from 'react-icons/fa';
import {
    FooterSection,
    FooterContainer,
    FooterLogo,
    FooterText,
    FooterDiscord
} from './FooterElements';
import ckLogo from '../../images/CKlogoT.png';

const Footer = () => {
    return (
        <FooterSection>
            <FooterContainer>
                <FooterLogo to='/'>
                        <img src={ckLogo} className="ckLogoT" alt="logo"/>
                </FooterLogo>
                <FooterText>
                    <FaCopyright /> &nbsp; Carrot Kritters 2022
                </FooterText>
                <FooterDiscord>
                <iframe title='DiscordBot' src="https://discord.com/widget?id=926231069848641576&theme=dark" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                </FooterDiscord>
            </FooterContainer>
        </FooterSection>
    )
};

export default Footer;
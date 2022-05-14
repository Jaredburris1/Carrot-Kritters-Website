import styled from 'styled-components';
import ssAboutBG from '../../images/ssSky.png';
import sAboutBG from '../../images/sSky.png';
import mAboutBG from '../../images/mSky.png';
import lAboutBG from '../../images/lSky.png';
import xlAboutBG from '../../images/xlSky.png';

// so we're going to do 375w 455h, 420w 455h, 768w 455h, 1440w 740h, 1920w 990h

export const AboutSection = styled.section`
    background-image: url(${xlAboutBG});
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: '100vw';
    height: 990px;
    font-size: 1rem;
    position: sticky;
    z-index: 1;

    @media screen and (max-width: 1920px) {
        transition: 0.8s all ease;
    }

    @media screen and (max-width: 1440px) {
        background-image: url(${lAboutBG});
        background-position: center;
        width: 100%;
        height: 745px;

        @media screen and (max-width: 1440px) {
        transition: 0.8s all ease;
        }

    }

    @media screen and (max-width: 768px) {
        background-image: url(${mAboutBG});
        background-position: center;
        width: 100%;
        height: 450px;

        @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
        }

    }

    @media screen and (max-width: 420px) {
        background-image: url(${sAboutBG});
        background-position: center;
        width: 100%;
        height: 450px;

        @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
        }
    }

    @media screen and (max-width: 375px) {
        background-image: url(${ssAboutBG});
        background-position: center;
        width: 100%;
        height: 450px;

        @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
        }
    }
`;

export const AboutContainer = styled.div`
    display: flex;
    height: 990px;
    z-index: 1;
    width: 100%;

    @media screen and (max-width: 1440px) {
        height: 745px;
    }

    @media screen and (max-width: 768px) {
        height: 450px;
    }
`;

export const AboutHeader = styled.text`
    color: black;
    text-align: center;
    font-size: 40px;
    font-weight: bold;

    @media screen and (max-width: 768px) {
        font-size: 30px;
    }

    @media screen and (max-width: 420px) {
        font-size: 20px;
    }
    `;

export const AboutTextBox = styled.div`
    background-color: cyan;
    margin-top: 450px;
    margin-left: 450px;
    margin-right: 550px;

    @media screen and (max-width: 1440px) {
        margin-top: 215px;
        margin-left: 360px;
        margin-right: 460px;
    }

    @media screen and (max-width: 1150px) {
        margin-top: 210px;
        margin-left: 180px;
        margin-right: 180px;
    }

    @media screen and (max-width: 768px) {
        margin-top: 120px;
        margin-left: 180px;
        margin-right: 190px;
    }

    @media screen and (max-width: 600px) {
        margin-top: 100px;
        margin-left: 130px;
        margin-right: 130px;
    }

    @media screen and (max-width: 420px) {
        margin-top: 130px;
        margin-left: 80px;
        margin-right: 90px;
    }
`;

export const AboutText = styled.p`
    color: black;
    text-align: center;
    font-size: 30px;
    font-weight: normal;

    @media screen and (max-width: 1440px) {
        font-size: 22px;
    }

    @media screen and (max-width: 768px) {
        font-size: 15px;
    }

    @media screen and (max-width: 420px) {
        font-size: 12px;
    }
`;
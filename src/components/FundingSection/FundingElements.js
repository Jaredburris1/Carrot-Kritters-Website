import styled from 'styled-components';

export const FundingSection = styled.section`
    background: black;
    height: 600px;
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

export const FundingContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 600px;
    z-index: 1;
    width: 100%;
    padding: 0 0px;
    max-width: 1920px;

    @media screen and (max-width: 420px) {
        flex-direction: column;
        align-items: center;
        justify-content: none;
    }
`;

export const FundingBox = styled.div`
    display: column;
`;

export const FundingHeader = styled.text`
    color: orange;
    text-align: center;
    font-weight: bold;
    margin-left: 400px;
    font-size: 30px;

    @media screen and (max-width: 1440px) {
        margin-left: 100px;
        font-size: 22px;
    }

    @media screen and (max-width: 960px) {
        margin-left: 125px;
        font-size: 20px;
    }

    @media screen and (max-width: 768px) {
        margin-left: 80px;
        font-size: 18px;
    }

    @media screen and (max-width: 420px) {
        margin-left: 110px;
        font-size: 16px;
    }

    @media screen and (max-width: 375px) {
        margin-left: 110px;
        font-size: 14px;
    }
`;

export const FundingPercentage = styled.ul`
    color: orange;
    font-weight: bold;
    font-size: 26px;
    padding: 20px 0px 12px 0px;

    @media screen and (max-width: 1440px) {
        font-size: 18px;
    }

    @media screen and (max-width: 960px) {
        font-size: 16px;
    }

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }

    @media screen and (max-width: 420px) {
        padding: 12px 0px 6px 0px;
        font-size: 14px;
    }

    @media screen and (max-width: 375px) {
        padding:  12px 0px 6px 0px;
        font-size: 12px;
    }
`;

export const FundingText = styled.ul`
    color: grey;
    font-size: 18px;

    @media screen and (max-width: 1440px) {
        font-size: 15px;
    }

    @media screen and (max-width: 960px) {
        font-size: 14px;
    }

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }

    @media screen and (max-width: 420px) {
        font-size: 11px;
    }

    @media screen and (max-width: 375px) {
        font-size: 10px;
    }
`;


export const PieChart = styled.div`
    display: flex;

    @media screen and (max-width: 1440px) {
        margin-top: 75px;
        height: 450px;
        max-width: 1440px;
    }

    @media screen and (max-width: 960px) {
        margin-top: 75px;
        height: 350px;
        max-width: 960px;
    }

    @media screen and (max-width: 768px) {
        margin-top: 75px;
        height: 300px;
        max-width: 768px;
    }

    @media screen and (max-width: 420px) {
        margin-top: 0px;
        height: 200px;
        width: 275px;
    }
`;
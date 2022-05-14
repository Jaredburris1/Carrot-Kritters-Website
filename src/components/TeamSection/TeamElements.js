import styled from 'styled-components';
import ssTeamBG from '../../images/ssRoadmapGraveyard.png';
import sTeamBG from '../../images/sRoadmapGraveyard.png';
import mTeamBG from '../../images/mRoadmapGraveyard.png';
import lTeamBG from '../../images/lRoadmapGraveyard.png';
import xlTeamBG from '../../images/xlRoadmapGraveyard.png';
import DrePic from '../../images/dreTeam.jpeg';
import JustinPic from '../../images/justinTeam.JPG';
import JaredPic from '../../images/jaredTeam.jpg';
import sDrePic from '../../images/sdreTeam.jpeg';
import sJustinPic from '../../images/sjustinTeam.JPG';
import sJaredPic from '../../images/sjaredTeam.jpg';
import ssDrePic from '../../images/ssdreTeam.jpeg';
import ssJustinPic from '../../images/ssjustinTeam.JPG';
import ssJaredPic from '../../images/ssjaredTeam.jpg';
import sssDrePic from '../../images/sssdreTeam.jpeg';
import sssJustinPic from '../../images/sssjustinTeam.JPG';
import sssJaredPic from '../../images/sssjaredTeam.jpg';


// so we're going to do 375w 455h, 420w 455h, 768w 455h, 1440w 740h, 1920w 990h

export const TeamSection = styled.section`
    background-image: url(${xlTeamBG});
    background-repeat: no-repeat;
    background-position: center;
    height: 985px;
    max-width: '100vw';
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    z-index: 1;

    @media screen and (max-width: 1920px) {
        transition: 0.8s all ease;
    }

    @media screen and (max-width: 1440px) {
        background-image: url(${lTeamBG});
        background-position: center;
        height: 740px;
        width: 100%;

        @media screen and (max-width: 1440px) {
        transition: 0.8s all ease;
        }
    }

    @media screen and (max-width: 768px) {
        background-image: url(${mTeamBG});
        background-position: center;
        height: 455px;
        width: 100%;

        @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
        }
    }

    @media screen and (max-width: 420px) {
        background-image: url(${sTeamBG});
        background-position: center;
        height: 455px;
        width: 100%;

        @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
        }
    }

    @media screen and (max-width: 375px) {
        background-image: url(${ssTeamBG});
        background-position: center;
        height: 455px;
        width: 100%;

        @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
        }
    }

`;

export const TeamContainer = styled.div`
    display: flex;
    justify-content: space-between;
    object-fit: contain;
    z-index: 1;
    width: 100%;
`;

export const DreContainer = styled.div`
    display: column;
    height: 100%;
    width: 33%;
`;

export const DreTitle = styled.text`
    margin-left: 175px;
    color: orange;
    font-weight: bold;
    font-size: 25px;

    @media screen and (max-width: 1440px) {
        margin-left: 170px;
    }

    @media screen and (max-width: 1300px) {
        margin-left: 130px;
        font-size: 20px;
    }

    @media screen and (max-width: 1150px) {
        margin-left: 70px;
        font-size: 18px;
    }

    @media screen and (max-width: 768px) {
        margin-left: 50px;
        font-size: 16px;
    }

    @media screen and (max-width: 600px) {
        margin-left: 50px;
    }

    @media screen and (max-width: 420px) {
        margin-left: 35px;
        font-size: 12px;
    }
`;

export const DreImage = styled.div`
    background-image: url(${DrePic});
    background-repeat: no-repeat;
    height: 350px;
    width: 265px;
    margin-left: 100px;

    @media screen and (max-width: 1440px) {
        margin-left: 100px;
    }

    @media screen and (max-width: 1300px) {
        margin-left: 50px;
    }

    @media screen and (max-width: 1150px) {
        background-image: url(${sDrePic});
        background-repeat: no-repeat;
        height: 200px;
        width: 150px;
        margin-left: 35px;
    }

    @media screen and (max-width: 768px) {
        background-image: url(${ssDrePic});
        height: 100px;
        width: 76px;
        margin-left: 50px;

    }

    @media screen and (max-width: 600px) {
        margin-left: 50px;
    }

    @media screen and (max-width: 420px) {
        background-image: url(${sssDrePic});
        height: 50px;
        width: 80px;
        margin-left: 45px;
    }
`;

export const DreTextBox = styled.div`
    background-color: black;
    margin-left: 25px;
    height: 400px;
    width: 425px;

    @media screen and (max-width: 1440px) {
        height: 300px;
        width: 400px;
    }

    @media screen and (max-width: 1300px) {
        height: 275px;
        width: 375px;
        margin-left: 0px;
    }

    @media screen and (max-width: 1150px) {
        height: 400px;
        width: 230px;
        margin-left: 0px;
    }

    @media screen and (max-width: 768px) {
        height: 335px;
        width: 200px;
        margin-left: 0px;
    }

    @media screen and (max-width: 600px) {
        height: 335px;
        width: 180px;
        margin-left: 0px;
    }

    @media screen and (max-width: 420px) {
        height: 400px;
        width: 135px;
        margin-left: 0px;
    }
`;

export const DreText = styled.text`
    color: grey;
    font-size: 20px;

    @media screen and (max-width: 1440px) {
        font-size: 16px;
    }

    @media screen and (max-width: 1300px) {
        font-size: 14px;
    }

    @media screen and (max-width: 1150px) {
        font-size: 13px;
    }

    @media screen and (max-width: 768px) {
        font-size: 10px;
    }

    @media screen and (max-width: 600px) {
        font-size: 9px;
    }

    @media screen and (max-width: 420px) {
        font-size: 7px;
        line-height: 1%;
    }
`;

export const JustinConatiner = styled.div`
    display: column;
    height: 100%;
    width: 33%;
`;

export const JustinTitle = styled.text`
    margin-left: 160px;
    color: orange;
    font-weight: bold;
    font-size: 25px;

    @media screen and (max-width: 1440px) {
        margin-left: 160px;
    }

    @media screen and (max-width: 1300px) {
        margin-left: 150px;
        font-size: 20px;
    }

    @media screen and (max-width: 1150px) {
        margin-left: 65px;
        font-size: 18px;
    }

    @media screen and (max-width: 768px) {
        margin-left: 50px;
        font-size: 16px;
    }

    @media screen and (max-width: 600px) {
        margin-left: 50px;
        font-size: 16px;
    }

    @media screen and (max-width: 420px) {
        margin-left: 40px;
        font-size: 12px;
    }
`;

export const JustinImage = styled.div`
    background-image: url(${JustinPic});
    background-repeat: no-repeat;
    height: 600px;
    width: 800px;
    margin-left: 150px;

    @media screen and (max-width: 1440px) {
        margin-left: 150px;
    }

    @media screen and (max-width: 1300px) {
        margin-left: 125px;
    }

    @media screen and (max-width: 1150px) {
        background-image: url(${sJustinPic});
        height: 200px;
        width: 150px;
        margin-left: 70px;
    }

    @media screen and (max-width: 768px) {
        background-image: url(${ssJustinPic});
        height: 100px;
        width: 47px;
    }

    @media screen and (max-width: 600px) {
        margin-left: 70px;
    }

    @media screen and (max-width: 420px) {
        background-image: url(${sssJustinPic});
        height: 50px;
        width: 35px;
        margin-left: 60px;
    }
`;

export const JustinTextBox = styled.div`
    background-color: black;
    margin-left: 25px;
    height: 400px;
    width: 425px;

    @media screen and (max-width: 1440px) {
        height: 300px;
        width: 400px;
    }

    @media screen and (max-width: 1300px) {
        height: 275px;
        width: 375px;
        margin-left: 15px;
    }

    @media screen and (max-width: 1150px) {
        height: 400px;
        width: 230px;
        margin-left: 0px;
    }

    @media screen and (max-width: 768px) {
        height: 335px;
        width: 200px;
        margin-left: 0px;
    }

    @media screen and (max-width: 600px) {
        height: 335px;
        width: 180px;
        margin-left: 0px;
    }

    @media screen and (max-width: 420px) {
        height: 400px;
        width: 120px;
        margin-left: 15px;
    }
`;

export const JustinText = styled.text`
    color: grey;
    font-size: 20px;

    @media screen and (max-width: 1440px) {
        font-size: 16px;
    }

    @media screen and (max-width: 1300px) {
        font-size: 14px;
    }

    @media screen and (max-width: 1150px) {
        font-size: 13px;
    }

    @media screen and (max-width: 768px) {
        font-size: 10px;
    }

    @media screen and (max-width: 600px) {
        font-size: 9px;
    }

    @media screen and (max-width: 420px) {
        font-size: 7px;
        line-height: 1%;
    }
`;

export const JaredContainer = styled.div`
    display: column;
    height: 100%;
    width: 33%;
`;

export const JaredTitle = styled.text`
    margin-left: 185px;
    color: orange;
    font-weight: bold;
    font-size: 25px;

    @media screen and (max-width: 1440px) {
        margin-left: 170px;
    }

    @media screen and (max-width: 1150px) {
        margin-left: 135px;
        font-size: 20px;
    }

    @media screen and (max-width: 1300px) {
        margin-left: 50px;
        font-size: 18px;
    }

    @media screen and (max-width: 768px) {
        margin-left: 45px;
        font-size: 16px;
    }

    @media screen and (max-width: 600px) {
        margin-left: 35px;
    }

    @media screen and (max-width: 420px) {
        margin-left: 25px;
        font-size: 12px;
    }
`;

export const JaredImage = styled.div`
    background-image: url(${JaredPic});
    background-repeat: no-repeat;
    height: 350px;
    width: 296px;
    margin-left: 120px;

    @media screen and (max-width: 1440px) {
        margin-left: 100px;
    }

    @media screen and (max-width: 1300px) {
        margin-left: 40px;
    }

    @media screen and (max-width: 1150px) {
        background-image: url(${sJaredPic});
        height: 200px;
        width: 150px;
        margin-left: 40px;
    }

    @media screen and (max-width: 768px) {
        background-image: url(${ssJaredPic});
        height: 100px;
        width: 85px;
        margin-left: 55px;
    }

    @media screen and (max-width: 600px) {
        margin-left: 45px;
    }

    @media screen and (max-width: 420px) {
        background-image: url(${sssJaredPic});
        height: 50px;
        width: 75px;
        margin-left: 45px;
    }
`;

export const JaredTextBox = styled.div`
    background-color: black;
    margin-left: 50px;
    height: 400px;
    width: 425px;

    @media screen and (max-width: 1440px) {
        height: 300px;
        width: 400px;
    }

    @media screen and (max-width: 1300px) {
        height: 275px;
        width: 330px;
        margin-left: 30px;
    }

    @media screen and (max-width: 1150px) {
        height: 400px;
        width: 230px;
        margin-left: 0px;
    }

    @media screen and (max-width: 768px) {
        height: 335px;
        width: 200px;
        margin-left: 0px;
    }

    @media screen and (max-width: 600px) {
        height: 335px;
        width: 180px;
        margin-left: 0px;
    }

    @media screen and (max-width: 420px) {
        height: 400px;
        width: 105px;
        margin-left: 15px;
    }
`;

export const JaredText = styled.text`
    color: grey;
    font-size: 20px;

    @media screen and (max-width: 1440px) {
        font-size: 16px;
    }

    @media screen and (max-width: 1300px) {
        font-size: 14px;
    }

    @media screen and (max-width: 1150px) {
        font-size: 13px;
    }

    @media screen and (max-width: 768px) {
        font-size: 10px;
    }

    @media screen and (max-width: 600px) {
        font-size: 9px;
    }

    @media screen and (max-width: 420px) {
        font-size: 7px;
        line-height: 1%;
    }
`;

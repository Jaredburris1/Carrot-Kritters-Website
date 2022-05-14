import styled from 'styled-components';
import ssRoadmapBG from '../../images/ssRoadmapfarm.png';
import sRoadmapBG from '../../images/sRoadmapfarm.png';
import mRoadmapBG from '../../images/mRoadmapfarm.png';
import lRoadmapBG from '../../images/lRoadmapfarm.png';
import xlRoadmapBG from '../../images/xlRoadmapfarm.png';
import Carrot1 from '../../images/roadmapCK.png';
import Carrot2 from '../../images/roadmapCK2.png';
import Carrot3 from '../../images/roadmapCK3.png';
import Carrot4 from '../../images/roadmapCK4.png';
import Carrot5 from '../../images/roadmapCK5.png';
import Carrot6 from '../../images/roadmapCK6.png';
import NeonApe from '../../images/neonApe.jpeg';
import MetaCollar from '../../images/metaCollar.jpg';

// so we're going with 375w 555h, 420w 555h, 768w 640h, 1440w 1195h, 1920w, 1600h

// 75% is Neon Apes and 85% is MetaCollar

export const RoadmapSection = styled.section`
    background-image: url(${xlRoadmapBG});
    background-repeat: no-repeat;
    background-position: center;
    max-width: '100vw';
    height: 1600px;
    display: flex;
    font-size: 1rem;
    position: sticky;
    z-index: 1;

    @media screen and (max-width: 1920px) {
        transition: 0.8s all ease;
    }

    @media screen and (max-width: 1440px) {
        background-image: url(${lRoadmapBG});
        background-position: center;
        height: 1195px;
        width: 100%;

        @media screen and (max-width: 1440px) {
        transition: 0.8s all ease;
        }
    }

    @media screen and (max-width: 768px) {
        background-image: url(${mRoadmapBG});
        background-position: center;
        height: 640px;
        width: 100%;

        @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
        }
    }

    @media screen and (max-width: 420px) {
        background-image: url(${sRoadmapBG});
        background-position: center;
        height: 555px;
        width: 100%;

        @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
        }
    }

    @media screen and (max-width: 375px) {
        background-image: url(${ssRoadmapBG});;
        background-position: center;
        height: 555px;
        width: 100%;

        @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
        }
    }
    
`;

export const RoadmapContainer = styled.div`  
    display: column;
    justify-content: center;
    object-fit: contain;
    z-index: 1;
    width: 100%;
    padding: 0 12px;

`;

export const RoadmapTitle = styled.div`
    background-color: black;
    display: flex;
    justify-content: center;
    width: 700px;
    margin-left: 600px;

    @media screen and (max-width: 1440px) {
        
    }

    @media screen and (max-width: 1300px) {
        
    }

    @media screen and (max-width: 1150px) {
        
    }

    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 600px) {
        
    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const RoadmapTitleText = styled.text`
    color: orange;
    font-size: 40px;
    font-weight: bold;

    @media screen and (max-width: 1440px) {
        
    }

    @media screen and (max-width: 1300px) {
        
    }

    @media screen and (max-width: 1150px) {
        
    }

    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 600px) {
        
    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const Roadmap10 = styled.div`
    display: flex;
    height: 170px;
    width: 100%;
    margin-top: 350px;

    @media screen and (max-width: 1440px) {
        
    }

    @media screen and (max-width: 1300px) {
        
    }

    @media screen and (max-width: 1150px) {
        
    }

    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 600px) {
        
    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const Roadmap10TextBox = styled.div`
    background-color: black;
    height: 70px;
    width: 700px;
    margin-top: 60px;

    @media screen and (max-width: 1440px) {
        
    }

    @media screen and (max-width: 1300px) {
        
    }

    @media screen and (max-width: 1150px) {
        
    }

    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 600px) {
        
    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const Roadmap10Text = styled.text`
    color: orange;
    font-size: 25px;

    @media screen and (max-width: 1440px) {
        
    }

    @media screen and (max-width: 1300px) {
        
    }

    @media screen and (max-width: 1150px) {
        
    }

    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 600px) {
        
    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const Roadmap10Img = styled.div`
    background-image: url(${Carrot1});
    background-repeat: no-repeat;
    height: 200px;
    width: 300px;
    margin-left: 60px;

    @media screen and (max-width: 1440px) {
        
    }

    @media screen and (max-width: 1300px) {
        
    }

    @media screen and (max-width: 1150px) {
        
    }

    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 600px) {
        
    }

    @media screen and (max-width: 420px) {
        
    }
`;


export const Roadmap25 = styled.div`
    display: flex;
    height: 150px;
    width: 100%;
    justify-content: right;
    
    @media screen and (max-width: 1440px) {
        
    }

    @media screen and (max-width: 1300px) {
        
    }

    @media screen and (max-width: 1150px) {
        
    }

    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 600px) {
        
    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const Roadmap25Img = styled.div`
    background-image: url(${Carrot2});
    background-repeat: no-repeat;
    height: 200px;
    width: 275px;

    @media screen and (max-width: 1440px) {
        
    }

    @media screen and (max-width: 1300px) {
        
    }

    @media screen and (max-width: 1150px) {
        
    }

    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 600px) {
        
    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const Roadmap25TextBox = styled.div`
    background-color: black;
    height: 90px;
    width: 650px;
    margin-top: 40px;

    @media screen and (max-width: 1440px) {
        
    }

    @media screen and (max-width: 1300px) {
        
    }

    @media screen and (max-width: 1150px) {
        
    }

    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 600px) {
        
    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const Roadmap25Text = styled.text`
    color: orange;
    font-size: 25px;

    @media screen and (max-width: 1440px) {
        
    }

    @media screen and (max-width: 1300px) {
        
    }

    @media screen and (max-width: 1150px) {
        
    }

    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 600px) {
        
    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const Roadmap50 = styled.div`
    display: flex;
    height: 200px;
    width: 100%;

    @media screen and (max-width: 1440px) {
        
    }

    @media screen and (max-width: 1300px) {
        
    }

    @media screen and (max-width: 1150px) {
        
    }

    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 600px) {
        
    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const Roadmap50TextBox = styled.div`
    background-color: black;
    height: 125px;
    width: 700px;
    margin-top: 30px;

    @media screen and (max-width: 1440px) {
        
    }

    @media screen and (max-width: 1300px) {
        
    }

    @media screen and (max-width: 1150px) {
        
    }

    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 600px) {
        
    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const Roadmap50Text = styled.text`
    color: orange;
    font-size: 25px;

    @media screen and (max-width: 1440px) {
        
    }

    @media screen and (max-width: 1300px) {
        
    }

    @media screen and (max-width: 1150px) {
        
    }

    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 600px) {
        
    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const Roadmap50Img = styled.div`
    background-image: url(${Carrot3});
    background-repeat: no-repeat;
    height: 200px;
    width: 300px;
    margin-left: 80px;

    @media screen and (max-width: 1440px) {
        
    }

    @media screen and (max-width: 1300px) {
        
    }

    @media screen and (max-width: 1150px) {
        
    }

    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 600px) {
        
    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const Roadmap75 = styled.div`
    display: flex;
    height: 150px;
    width: 100%;
    justify-content: right;

    @media screen and (max-width: 1440px) {
        
    }

    @media screen and (max-width: 1300px) {
        
    }

    @media screen and (max-width: 1150px) {
        
    }

    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 600px) {
        
    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const Roadmap75Img = styled.div`
    background-image: url(${Carrot4});
    background-repeat: no-repeat;
    height: 200px;
    width: 300px;

    @media screen and (max-width: 1440px) {
        
    }

    @media screen and (max-width: 1300px) {
        
    }

    @media screen and (max-width: 1150px) {
        
    }

    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 600px) {
        
    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const Roadmap75TextBox = styled.div`
    background-color: black;
    height: 150px;
    width: 550px;

    @media screen and (max-width: 1440px) {
        
    }

    @media screen and (max-width: 1300px) {
        
    }

    @media screen and (max-width: 1150px) {
        
    }

    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 600px) {
        
    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const Roadmap75Text = styled.text`
    color: orange;
    font-size: 25px;

    @media screen and (max-width: 1440px) {
        
    }

    @media screen and (max-width: 1300px) {
        
    }

    @media screen and (max-width: 1150px) {
        
    }

    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 600px) {
        
    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const NeonApeImg = styled.div`
    background-image: url(${NeonApe});
    background-repeat: no-repeat;
    height: 200px;
    width: 180px;
    margin-left: 30px;

    @media screen and (max-width: 1440px) {
        
    }

    @media screen and (max-width: 1300px) {
        
    }

    @media screen and (max-width: 1150px) {
        
    }

    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 600px) {
        
    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const Roadmap85 = styled.div`
    display: flex;
    height: 200px;
    width: 100%;

    @media screen and (max-width: 1440px) {
        
    }

    @media screen and (max-width: 1300px) {
        
    }

    @media screen and (max-width: 1150px) {
        
    }

    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 600px) {
        
    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const MetaCollarImg = styled.div`
    background-image: url(${MetaCollar});
    background-repeat: no-repeat;
    height: 200px;
    width: 200px;
    margin-right: 20px;

    @media screen and (max-width: 1440px) {
        
    }

    @media screen and (max-width: 1300px) {
        
    }

    @media screen and (max-width: 1150px) {
        
    }

    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 600px) {
        
    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const Roadmap85TextBox = styled.div`
    background-color: black;
    height: 180px;
    width: 480px;

    @media screen and (max-width: 1440px) {
        
    }

    @media screen and (max-width: 1300px) {
        
    }

    @media screen and (max-width: 1150px) {
        
    }

    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 600px) {
        
    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const Roadmap85Text = styled.text`
    color: orange;
    font-size: 25px;

    @media screen and (max-width: 1440px) {
        
    }

    @media screen and (max-width: 1300px) {
        
    }

    @media screen and (max-width: 1150px) {
        
    }

    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 600px) {
        
    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const Roadmap85Img = styled.div`
    background-image: url(${Carrot5});
    background-repeat: no-repeat;
    height: 200px;
    width: 220px;

    @media screen and (max-width: 1440px) {
        
    }

    @media screen and (max-width: 1300px) {
        
    }

    @media screen and (max-width: 1150px) {
        
    }

    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 600px) {
        
    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const Roadmap100 = styled.div`
    display: flex;
    height: 200px;
    width: 100%;
    justify-content: right;

    @media screen and (max-width: 1440px) {
        
    }

    @media screen and (max-width: 1300px) {
        
    }

    @media screen and (max-width: 1150px) {
        
    }

    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 600px) {
        
    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const Roadmap100Img = styled.div`
    background-image: url(${Carrot6});
    background-repeat: no-repeat;
    height: 200px;
    width: 300px;

    @media screen and (max-width: 1440px) {
        
    }

    @media screen and (max-width: 1300px) {
        
    }

    @media screen and (max-width: 1150px) {
        
    }

    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 600px) {
        
    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const Roadmap100TextBox = styled.div`
    background-color: black;
    height: 300px;
    width: 670px;

    @media screen and (max-width: 1440px) {
        
    }

    @media screen and (max-width: 1300px) {
        
    }

    @media screen and (max-width: 1150px) {
        
    }

    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 600px) {
        
    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const Roadmap100Text = styled.text`
    color: orange;
    font-size: 25px;

    @media screen and (max-width: 1440px) {
        
    }

    @media screen and (max-width: 1300px) {
        
    }

    @media screen and (max-width: 1150px) {
        
    }

    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 600px) {
        
    }

    @media screen and (max-width: 420px) {
        
    }
`;
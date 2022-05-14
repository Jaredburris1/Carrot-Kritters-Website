import React from 'react';
import {
    RoadmapSection,
    RoadmapContainer, 
    RoadmapTitle,
    RoadmapTitleText, 
    Roadmap10,
    Roadmap10Img,
    Roadmap10TextBox,
    Roadmap10Text,
    Roadmap25,
    Roadmap25Img,
    Roadmap25TextBox,
    Roadmap25Text,
    Roadmap50,
    Roadmap50Img,
    Roadmap50TextBox,
    Roadmap50Text,
    Roadmap75,
    Roadmap75Img,
    NeonApeImg,
    Roadmap75TextBox,
    Roadmap75Text,
    Roadmap85,
    Roadmap85Img,
    MetaCollarImg,
    Roadmap85TextBox,
    Roadmap85Text,
    Roadmap100,
    Roadmap100Img,
    Roadmap100TextBox,
    Roadmap100Text
} from './RoadmapElements';

const Roadmap = () => {
    return (
        <RoadmapSection>
            <RoadmapContainer>
                <RoadmapTitle>
                    <RoadmapTitleText>
                        Followed by Percentage of Mint Out!
                    </RoadmapTitleText>
                </RoadmapTitle>
                <Roadmap10>
                    <Roadmap10TextBox>
                        <Roadmap10Text>
                            10% - 5 people win free gas, Claim within 24hrs. We will reimburse gas fees on last transaction on Carrot Kritters.
                        </Roadmap10Text>
                    </Roadmap10TextBox>
                    <Roadmap10Img>
                    </Roadmap10Img>
                </Roadmap10>
                <Roadmap25>
                    <Roadmap25Img>
                    </Roadmap25Img>
                    <Roadmap25TextBox>
                        <Roadmap25Text>
                            25% - Carrot Kritters Merch. Giveaway with 2 Winners, 1 shirt and 1 hat for each winner, or a free Carrot Kritters airdrop.
                        </Roadmap25Text>
                    </Roadmap25TextBox>
                </Roadmap25>
                <Roadmap50>
                    <Roadmap50TextBox>
                        <Roadmap50Text>
                            50% - Giveaway for Collectors and Whales. 10k Gold Ring with engraving, 2 winners or a free Carrot Kritters airdrop.<br/><br/>
                            5 Carrot Kritters NFT=1 Entry for the raffle.
                        </Roadmap50Text>
                    </Roadmap50TextBox>
                    <Roadmap50Img>
                    </Roadmap50Img>
                </Roadmap50>
                <Roadmap75>
                    <Roadmap75Img>
                    </Roadmap75Img>
                    <Roadmap75TextBox>
                        <Roadmap75Text>
                            75% - Carrot Kritters edition physical neon sign with signature of the artist or 0.5 eth, 2 winners. <br/><br/>Neon signs valued at 
                            0.5 Eth each. <br/>Twitter: @NeonApesYC
                        </Roadmap75Text>
                    </Roadmap75TextBox>
                    <NeonApeImg>
                    </NeonApeImg>
                </Roadmap75>
                <Roadmap85>
                    <MetaCollarImg>
                    </MetaCollarImg>
                    <Roadmap85TextBox>
                        <Roadmap85Text>
                            85% - Digital and Physical Carrot Kritters Sand art giveaway, 1 winner. <br/>Twitter: @Fallinginsand.eth
                            <br/><br/>Metacollar NFT giveaway, 2 winners. <br/>Twitter: @Metacollar
                        </Roadmap85Text>
                    </Roadmap85TextBox>
                    <Roadmap85Img>
                    </Roadmap85Img>
                </Roadmap85>
                <Roadmap100>
                    <Roadmap100Img>
                    </Roadmap100Img>
                    <Roadmap100TextBox>
                        <Roadmap100Text>
                            100% - 15% of total mint out amount transfers to community giveaway wallet.<br/><br/>
                            Utility Token and staking takes place.<br/><br/>
                            5% of total mint out gets donated to tribal roots which is a not for profit.<br/><br/>
                            (1 winner/RARITY) 1/1 Carrot Kritters created by the amazing artist. Twitter: @jamex_art
                        </Roadmap100Text>
                    </Roadmap100TextBox>
                </Roadmap100>
            </RoadmapContainer>
        </RoadmapSection>
    )
};

export default Roadmap;
import React from 'react';
import {
    FundingSection,
    FundingContainer, 
    FundingBox,
    FundingHeader, 
    FundingPercentage,
    FundingText,
    PieChart
} from './FundingElements';
import pieChart from '../../images/PieChart.png';

const Funding = () => {
    return (
        <FundingSection>
            <FundingContainer>
                <FundingBox>
                    <FundingHeader>
                        Based On 100% Mint Out
                    </FundingHeader>
                    <FundingPercentage>
                        40% ~ Development 
                    </FundingPercentage>
                    <FundingText>
                        - Development towards our tokenized system, trait shop, merchandise store and game.
                    </FundingText>
                    <FundingPercentage>
                        30% ~ Team 
                    </FundingPercentage>
                    <FundingText>
                        - This is for the team, which mean it will go toward paying the Founders as well as adding new Developers and creating an LLC for the Carrot Kritters.
                    </FundingText>
                    <FundingPercentage>
                        15% ~ Community Wallet
                    </FundingPercentage>
                    <FundingText>
                        - A community wallet which the community will have control over through proposals and voting system on snapshot.
                    </FundingText>
                    <FundingPercentage>
                        10% ~ Giveaways 
                    </FundingPercentage>
                    <FundingText>
                        - Funds will go towards giveaways and donations allocated on our Roadmap.
                    </FundingText>
                    <FundingPercentage>
                        5% ~ Marketing 
                    </FundingPercentage>
                    <FundingText>
                        - Funding for marketing once mint reaches 100%.
                    </FundingText>  
                    <FundingText>
                        - Visual marketing ~ Videos about our NFT shilled on authentic and great engagement platforms.
                    </FundingText> 
                    <FundingText>
                        - Animated marketing ~ Funding allocated to create animated Carrot Kritters.
                    </FundingText>
                </FundingBox>
                    <PieChart>
                        <img src={pieChart} className="pieChart" alt="PieChart"/>
                    </PieChart>
            </FundingContainer>
        </FundingSection>
    )
};

export default Funding;
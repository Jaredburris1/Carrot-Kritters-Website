import React from 'react';
import {
    TeamSection,
    TeamContainer, 
    DreContainer,
    DreTitle,
    DreImage,
    DreTextBox,
    DreText,
    JustinConatiner,
    JustinTitle,
    JustinImage,
    JustinTextBox,
    JustinText,
    JaredContainer,
    JaredTitle,
    JaredImage,
    JaredTextBox,
    JaredText
} from './TeamElements';


const Team = () => {
    return (
        <TeamSection>
            <TeamContainer>
                <DreContainer>
                    <DreTitle>
                        NFTfamily
                    </DreTitle>
                    <DreImage>
                    </DreImage>
                    <DreTextBox>
                        <DreText>
                        Hi! I'm Andre, I started my journey in the NFT world in late October of 2021. Prior to this past October I never 
                        had any form of social media. That's right my first accounts were recently set up on Discord and Twitter. The NFT 
                        community has inspired me to do more in the space after being able to connect and understand people. Discord is 
                        where I met my partner Justin and connected with him in real life prior to starting this project with our kids and 
                        wives meeting each other. I am fully dedicated in leading the CollarFam, Twitter: @Metacollar / Website: Metacollar.io 
                        my extensive experience includes 20+ years in art and 10+ years as a fine dining chef. I was born and raised in Houston, 
                        TX and currently resides in Northern California. I am currently full time in the NFT world.
                        </DreText>
                    </DreTextBox>
                </DreContainer>
                <JustinConatiner>
                    <JustinTitle>
                        NFTstayhigh
                    </JustinTitle>
                    <JustinImage>
                    </JustinImage>
                    <JustinTextBox>
                        <JustinText>
                        Hi I'm Justin, My journey started in April as I started to mine Ethereum as exciting as that was, 
                        I then discovered NFTs in August 2021. I jumped right in leaning about WEB.3 and how digital assets worked. 
                        I was very new and was curious to buy. My first few purchases lead into big rugs, led by influencers. I stopped buying 
                        into hype, and started buying into people and learned there are some amazing people in this space. Which is the biggest 
                        reason why I stepped out of my comfort zone and leaped into turning physical art into digital art, I also started 
                        working with meta-data. I am one of two founders of Carrot Kritters which has started to further my amazing journey into this space.
                        </JustinText>
                    </JustinTextBox>
                </JustinConatiner>
                <JaredContainer>
                    <JaredTitle>
                        JareDeveloper
                    </JaredTitle>
                    <JaredImage>
                    </JaredImage>
                    <JaredTextBox>
                        <JaredText>
                            Hey everyone! I'm Jared I am a Bachelor in Computer Science with a concentration in Software Engineering this is my 
                            passion and I wouldn't want to do anything else! Personally I specialize in web development and at this point I am 
                            really getting into blockchain development. Working with these awesome people and building out this Website and 
                            Smart Contract has been one of the best decisions I have made. With skill, dedication, and friendship in mind I 
                            believe this will be one of the best projects on the market!
                        </JaredText>
                    </JaredTextBox>
                </JaredContainer>
            </TeamContainer>
        </TeamSection>
    )
};

export default Team;
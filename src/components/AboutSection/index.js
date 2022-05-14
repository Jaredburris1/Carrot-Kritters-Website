import React from 'react';
import {
    AboutSection,
    AboutContainer, 
    AboutHeader,
    AboutTextBox, 
    AboutText
} from './AboutElements';

const About = () => {
    return (
        <AboutSection>
            <AboutContainer>
                <AboutHeader>
                    About Carrot Kritters
                    <AboutTextBox>
                        <AboutText>
                            There were acres of an organic carrot farm ran by two families. Every year these two families would prepare the soil, 
                            plant carrot seeds, water, and harvest for their families. This year in 2022 it was much different. There was a 
                            large nuclear explosion that left the soil toxic. There were 10,000 carrots planted that day. The carrots went 
                            rogue and jumped out of the soil. Some carrots mutated; this is how the Carrot Kritters were formed. The 10,000 
                            Carrot Kritters were ultra-smart and invaded the blockchain to be harvested by Farmers like you and our team!
                        </AboutText>
                    </AboutTextBox>
                </AboutHeader>
            </AboutContainer>
        </AboutSection>
    )
};

export default About;

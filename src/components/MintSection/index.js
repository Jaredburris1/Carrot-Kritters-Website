import React from 'react';
import {
    MintSection,
    MintContainer, 
    MintBg, 
    MintBtn,
    MintCounter
} from './MintElements';

const Mint = () => {
    return (
        <MintSection>
            <MintContainer>
                <MintBg>
                    <MintBtn to='Mint'>Mint</MintBtn> <MintCounter>0 / 10000</MintCounter>
                </MintBg>
            </MintContainer>
        </MintSection>
    )
}

export default Mint;

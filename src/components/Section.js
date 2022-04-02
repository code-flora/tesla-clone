import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section(props) {
    return (
        <Wrap bgImg={props.imageUrl}>
            <Fade top>
                <ItemText>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </ItemText>
            </Fade>

            <LowerGroup>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {props.leftBtnText}
                        </LeftButton>
                        {props.rightBtnText &&
                            <RightButton>
                                {props.rightBtnText}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg" />
            </LowerGroup>
        </Wrap>
    )
}

export default Section

const Wrap = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("${props.bgImg}")`};
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const LowerGroup = styled.div`

`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media(max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    border-radius: 20px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 0.8em;
    letter-spacing: 1px;
    cursor: pointer;
`
const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    margin-top: 20px;
    margin-bottom: 15px;
    height: 40px;
    animation: animateDown infinite 1.5s;
`
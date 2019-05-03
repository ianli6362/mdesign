import React from "react";
import styled, {keyframes}  from 'styled-components';
import posed from 'react-pose';

const componentHeight = '105px';

import text from './test.png';
import text1 from './text1.png';

const CoverLayer = posed.div({
    toLeft: {
        left: '100%',
        width: '0px',
        transition: {
            width: { ease: 'linear', duration: 2400, delay: 2200 },
            left: { ease: 'linear', duration: 2400, delay: 2200 },
        }
    }
});

const TextBox = posed.div({
    toLeft: {
        backgroundPosition: '0px 50%',
        transition: {
            backgroundPosition: { ease: 'linear', duration: 2000, delay: 3500 },
        }
    }
});

const TextBoxYong = posed.div({
    toLeft: {
        backgroundPosition: '0px 50%',
        transition: {
            backgroundPosition: { ease: 'linear', duration: 1200, delay: 3000 },
        }
    }
});


class AmazingText extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount() {
        setTimeout(()=>{
                this.setState({
                    cover_layer: 'toLeft'
                })
            },
            2000)
    }

    render() {
        const {className,leftText,centerText,top,marginLeft, showCircle} = this.props;

        const {cover_layer} = this.state;

        return (
            <div className={className} style={{
                top: top
            }}>
                <TextBoxYong className="yong-box" pose={cover_layer}>{leftText}</TextBoxYong>

                <TextBox className="text-box" pose={cover_layer}>
                    {centerText}
                </TextBox>

            </div>
        );
    }
}

export default styled(AmazingText)`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-items: center;
    font-size: 45px;
    font-family: "LisongPro";
    
    & .yong-box {
        position: absolute;
        left: 32px;
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        background-image: url(${text1});
        background-repeat: no-repeat;
        background-position: -300px;
        background-size: cover;    
    }
    
    & .text-box {
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        background-image: url(${text1});
        background-repeat: no-repeat;
        background-position: -600px;
        background-size: cover;
    }
    
    & .cover-layer {
        background-image: url(${text});
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        height: 100%;
        width: 100%;
        z-index: 10px;
    }
`;
import React from "react";
import styled, {keyframes}  from 'styled-components';
import posed from 'react-pose';

import Circle from '../Circle/index';
import Arrow from '../Arrow/index';

const componentHeight = '105px';

const CoverLayer = posed.div({
    f1: {

    },
    f2: {
        left: '100%',
        width: '0px',
        transition: {
            width: { ease: 'linear', duration: 2400, delay: 2200 },
            left: { ease: 'linear', duration: 2400, delay: 2200 },
        }
    }
});

class AmazingText extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cover_layer: 'f1'
        }
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                cover_layer: 'f2'
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
                <div className="yong-box">{leftText}</div>
                <Circle opacity={showCircle} left="calc(50% + 20px)" top="calc(50% - 34px)" />
                <Arrow opacity={showCircle} left="calc(50% - 80px)" top="calc(50% - 6px)" />
                <div style={{
                    marginLeft: marginLeft
                }}>{centerText}</div>
                <CoverLayer className="cover-layer" pose={cover_layer}></CoverLayer>
            </div>
        );
    }
}

export default styled(AmazingText)`
    display: flex;
    position: absolute;
    justify-content: center;
    width: 100%;
    height: ${componentHeight};
    align-items: center;
    font-size: 40px;
    
    .yong-box {
        position: absolute;
        left: calc(10.9% + 34px);    
    }
    
    .cover-layer {
        background-color: #313131;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        height: 100%;
        width: 100%;
        z-index: 10px;
    }
`;
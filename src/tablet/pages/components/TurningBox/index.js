import React from "react";
import styled, {keyframes}  from 'styled-components';
import posed from 'react-pose';

const FontBox = posed.div({
    enlarge: {
        opacity: 1,
        scaleY: 53/40,
        scaleX: 53/40,
        transition: {
            scaleY: { ease: 'easeIn', duration: 600 },
            scaleX: { ease: 'easeIn', duration: 600 }
        }
    },
    rotate: {
        rotate: 45,
        transition: {
            rotate: { ease: 'easeIn', duration: 600, delay: 640 },
        }
    }
});

const LeftBox = posed.div({
    showLeft: {
        opacity: 1,
        left: '0',
        transition: {
            opacity: { ease: 'easeIn', duration: 600, delay: 1400 },
            left: { ease: 'easeIn', duration: 600, delay: 1240 },
        }
    }
});

const BoxWrapper = posed.div({
    toLeft: {
        left: '0%', //to left most;
        transition: {
            left: { ease: 'easeIn', duration: 600, delay: 1400 }
        }
    }
});

const BottomBox = posed.div({
    showBottom: {
        opacity: 1,
        bottom: '0px',
        transition: {
            opacity: { ease: 'easeIn', duration: 600, delay: 1400 },
            bottom: { ease: 'easeIn', duration: 600, delay: 1240 },
        }
    }
});

const ContentWrapper = posed.div((props)=>{
    const {top, topDuration, topDelay} = props;
    return {
        toTop: {
            top: top,
            transition: {
                top: { ease: 'easeIn', duration: topDuration, delay: topDelay }
            }
        }
    }
});

const componentHeight = '105px';

class TurningBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                font_box: 'enlarge',
                box_wrapper: 'toLeft',
                content_wrapper: 'toTop'
            });

            setTimeout(()=>{
                this.setState({
                    font_box: 'rotate',
                    left_box: 'showLeft',
                    bottom_box: 'showBottom',
                });
            }, 1400)

        }, 2000);
    }

    render() {
        const {className} = this.props;
        const {left_box, font_box, bottom_box, box_wrapper ,content_wrapper} = this.state;

        return (
            <ContentWrapper className={className} top="0" topDuration={600} topDelay={700} pose={content_wrapper}>

                <BoxWrapper className="box" pose={box_wrapper}>
                    <LeftBox className="box-left" pose={left_box}>
                        <div className="text-left">45</div>
                        <div className="bar-left"></div>
                    </LeftBox>

                    <div className="box-center">
                        <FontBox className="font-box" pose={font_box} />
                    </div>

                    <BottomBox className="box-bottom" pose={bottom_box}>
                        <div className="text-bottom">360</div>
                        <div className="bar-bottom"></div>
                    </BottomBox>
                </BoxWrapper>

            </ContentWrapper>
        );
    }
}

export default styled(TurningBox)`
    display: flex;
    position: relative;
    justify-content: center;
    width: 100%;
    height: ${componentHeight};
    top: calc(50% - 52.5px);
    z-index: 40;

    .box {
        height: 105px;
        width: 105px;
        position: absolute; 
    }
    
    .box-left {
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        left: 16px;
        height: 100%;
        width: 16px;
        opacity: 0;
    }
    
    .box-bottom {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 16px;
        position: absolute;
        bottom: 16px;
        left: 0;
        opacity: 0;
    }
    
    .box-center {
        height: 73px;
        width: 73px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 16px;
        left: 16px;
    }
    
    .bar-left {
        background: #D8D8D8;
        height: 1px;
        width: 100%;
    }
    
    .text-left {
        font-size: 10px;
        top: 36%;
        color: #D8D8D8;
        position: absolute;
    }
    
    .text-bottom {
        font-size: 10px;
        bottom: -2px;
        color: #D8D8D8;
        position: absolute;
        right: 32%;
    }
    
    .bar-bottom {
        background: #D8D8D8;
        height: 100%;
        width: 1px;
    }
    
    .font-box {
        opacity: 0.1;
        border: 1px solid #D8D8D8;
        height: 38px;
        width: 38px;
    }
`;
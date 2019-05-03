import React from "react";
import styled, {keyframes}  from 'styled-components';
import posed from 'react-pose';

const TextWrapper = posed.div({
    showText: {
        opacity: 1,
        transition: {
            opacity: { ease: 'easeIn', duration: 600, delay: 740 }
        }
    }
});

class MagicText extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                text_wrapper: 'showText'
            })
        },2000);
    }


    render() {
        const {className, top, left, text} = this.props;
        const {text_wrapper} = this.state;
        return (
            <TextWrapper className={className} style={{
                top
            }} pose={text_wrapper}>
                <p className="text-box" style={{
                    left
                }}>{text}</p>
            </TextWrapper>
        );
    }
}

export default styled(MagicText)`
    display: flex;
    position: absolute;
    justify-content: center;
    width: 100%;
    opacity: 0;
    z-index: 40;
    font-size: 16px;
    font-family: arial;
    
    .text-box {
        position: absolute;
        line-height: 1.6;
        padding-left: 34px;
        font-family: "PingFang SC Light";
    }
`;
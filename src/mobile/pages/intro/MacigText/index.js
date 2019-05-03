import React from "react";
import styled, {keyframes}  from 'styled-components';
import posed from 'react-pose';

const TextWrapper = posed.div({
    f1: {opacity: 0},
    f2: {
        opacity: 1,
        transition: {
            opacity: { ease: 'easeIn', duration: 600, delay: 740 }
        }
    }
});

class MagicText extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text_wrapper: 'f1'
        }
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                text_wrapper: 'f2'
            })
        },2000);
    }


    render() {
        const {className, top, text} = this.props;
        const {text_wrapper} = this.state;
        return (
            <TextWrapper className={className} style={{
                top
            }} pose={text_wrapper}>
                <p className="text-box">{text}</p>
            </TextWrapper>
        );
    }
}

export default styled(MagicText)`
    display: flex;
    position: absolute;
    justify-content: center;
    width: 100%;
    z-index: 40;
    
    .text-box {
        padding-left: 10.9%;
        padding-right: 10.9%;
        line-height: 1.6;
    }
`;
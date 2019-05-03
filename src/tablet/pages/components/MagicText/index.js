import React from "react";
import styled from 'styled-components';
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
        const {className, text} = this.props;
        const {text_wrapper} = this.state;
        return (
            <TextWrapper className={className} style={{
                top
            }} pose={text_wrapper}>
                <div style={{
                    lineHeight: 2
                }}>{text}</div>
            </TextWrapper>
        );
    }
}

export default styled(MagicText)`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 40;
    font-size: 18px;
`;
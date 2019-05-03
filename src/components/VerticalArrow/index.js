import React from 'react';
import styled, {keyframes}  from 'styled-components';
import posed from 'react-pose';

const ArrowLeft = posed.div({
    toLeft: {
        opacity: 1,
        width: '94%',
        transition: {
            opacity: { ease: 'linear', duration: 80, delay: 2900 },
            width: { ease: 'easeIn', duration: 700, delay: 2900 }
        }
    }
});

const ArrowRight = posed.div({
    toLeft: {
        opacity: 1,
        transition: {
            opacity: { ease: 'linear', duration: 80, delay: 2900 },
        }
    }
});


class Index extends React.Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                arrow_left: 'toLeft',
                arrow_right: 'toLeft',
            });
        }, 3400);
    }

    render(){
        const {className, top, left, width} = this.props;
        const {arrow_left, arrow_right} = this.state;
        return (
            <div className={className} style={{
                top, left, width
            }} >
                <ArrowLeft className="arrow-box-left" pose={arrow_left}></ArrowLeft>
                <ArrowRight className="arrow-box-right" pose={arrow_right}></ArrowRight>
            </div>
        )
    }
};

export default styled(Index)`
    height: 20px;
    width: 330px;
    display: flex;
    justify-content: left;
    align-items: center;
    top: calc(50% + 14px);
    left: 47.4%;
    position: absolute;
    z-index: 40;
    
    .arrow-box-left {
        opacity: 0;
        height: 1px;
        width: 20px;
        float: left;
        background-color: #D8D8D8;
    }
    
    .arrow-box-right {
        width: 0;
        height: 0;
        opacity: 0;
        border-top: 4px solid transparent;
        border-left: 10px solid #D8D8D8;
        border-bottom: 4px solid transparent;
    }
  
`;
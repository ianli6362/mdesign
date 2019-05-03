import React from 'react';
import styled, {keyframes}  from 'styled-components';
import posed from 'react-pose';


import downArrow from './down_arrow.png';

class DownArrow extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            opacity: 0
        }
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                opacity: 1
            });
        }, this.props.timeOut)
    }

    render(){

        const {className} = this.props;
        const {opacity} = this.state;

        return (
            <div className={className} style={{opacity}} />
        )
    }
};

const upAndDown = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-24px); }
`;

export default styled(DownArrow)`
    display: flex;
    height: 40px;
    width: 30px;
    justify-content: center;
    background-image: url(${downArrow});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    animation: ${upAndDown} 1s infinite  alternate;
`;
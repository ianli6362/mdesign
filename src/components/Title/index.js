import React from "react";
import styled from 'styled-components';
import posed from 'react-pose';

class Title extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render() {
        const {className} = this.props;

        return (
            <div className={className} >
                <div className="square"></div>
                <div className="our-works">我们的设计作品</div>
            </div>
        );
    }
}

export default styled(Title)`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    font-family: "PingFang SC Light";
    
    .square {
        height: 60px;
        width: 60px;
        border: 1px solid #ffffff;
        -webkit-transform: rotate(60deg);
        -ms-transform: rotate(60deg);
        transform: rotate(60deg);
        position: absolute;
        top: 10px;
        left: -24px;
        opacity: 0.6;
    }
    
    .our-works {
        position: absolute;
        top: 24px;
        left: 0px;
        font-size: 1.4em;
        color: #ffffff;
    }
`;
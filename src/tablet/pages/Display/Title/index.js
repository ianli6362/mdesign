import React from "react";
import styled from 'styled-components';

class Title extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {className, rotate} = this.props;

        let rotateStyle1 = {
            transform:  `rotate(60deg)`,
            transition: `all 0.5s ease-in-out`
        };

        let rotateStyle2 = {
            transform:  `rotate(120deg)`,
            transition: `all 0.5s ease-in-out`
        };

        let rotateStyle3 = {
            transform:  `rotate(240deg)`,
            transition: `all 0.5s ease-in-out`
        };

        let rotateStyle = {};

        if(rotate === 1) {
            rotateStyle = rotateStyle1
        }

        if(rotate === 2) {
            rotateStyle = rotateStyle2
        }

        if(rotate === 3) {
            rotateStyle = rotateStyle3
        }

        return (
            <div className={className} >
                <div className="square" style={rotateStyle}></div>
                <div className="our-works">我们的设计作品</div>
            </div>
        );
    }
}

export default styled(Title)`
    width: 100%;
    height: 100%;
    display: flex;
    
    .square {
        height: 58px;
        width: 58px;
        border: 1px solid #4C4C4C;
        -webkit-transform: rotate(75deg);
        -ms-transform: rotate(75deg);
        transform: rotate(75deg);
        position: absolute;
        top: 10px;
        left: 13px;
        
    }
    
    .our-works {
        position: absolute;
        top: 26px;
        left: 34px;
        font-size: 18px;
        color: #ffffff;
    }
`;
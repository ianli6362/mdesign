import React from 'react';
import styled from 'styled-components';

import Title from '../../../components/Title';
import VerticalText from '../../../components/VerticalText';

class Display extends React.PureComponent {

    render(){
        const { className, vtext, text, pic, position } = this.props;

        const pos = position === 'right' ? {right: '14px', paddingLeft: `0px`, position: 'absolute', width: '280px'} : { position: 'absolute', left: '74px', width: '280px'};

        return (
            <div className={className}>
                <div className="content-wrapper">
                    <div className="text-wrapper" style={pos}>
                        <Title />
                        <VerticalText text={vtext} />
                        <div className="text">{text}</div>
                        <div className="labels">
                            <div className="label">交互设计</div>
                            <div className="label">界面设计</div>
                            <div className="label">品牌提升</div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
};


// style={{
//     backgroundImage: `url(${pic})`
// }}

export default styled(Display)`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    
    & .content-wrapper {
        display: flex;
        height: 100%;
        width: 1170px;
        position: absolute;
    }
    
    & .text-wrapper {
        height: 300px;
        top: 24.8%;
        position: absolute;
    }
    
    & .labels {
        position: absolute;
        top: 210px;
        display: flex;
        color: #ffffff;
        width: 96%;
        justify-content: space-around;
    }
    
    & .label {
        border: 1px solid #ffffff;
        padding: 6px;
        font-size: 1em;
    }
    
    & .text {
        position: relative;
        font-size: 45px;
        left: 0px;
        color: white;
        top: 127px;
        font-family: "LisongPro";
    }
`;

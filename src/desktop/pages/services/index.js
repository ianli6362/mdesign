import React from 'react';
import styled from 'styled-components';

import DownArrow from '../../../components/DownArrow/index';

import p1 from './1.png';
import p2 from './2.png';
import p3 from './3.png';
import p4 from './4.png';
import p5 from './5.png';

import p11 from './11.png';
import p22 from './22.png';
import p33 from './33.png';
import p44 from './44.png';
import p55 from './55.png';

const Tab = (props)=>{
    const { className, text, height, width, size, x, y } = props;
    return (
        <div className={className} style={{
            backgroundSize: size,
            backgroundPositionX: x,
            backgroundPositionY: y
        }}>
            <div className="upper" style={{
                height, width
            }}></div>

            <div className="lower">{text}</div>
        </div>
    )
};

const Stab = styled(Tab)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 140px;
    width: 144px;
    background-image: ${props => `url(${props.backgroundu})`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    
    .upper {
        top: 20px;
        z-index: 10;
        background-image: ${props => `url(${props.background})`};
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
    }
    
    .upper-back {
        position: relative;
        z-index: 4;
        background-image: ${props => `url(${props.backgroundu})`};
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
    }
    
    
    
    .lower {
        display: flex;
        height: 44px;
        margin-top: 14px;
        font-family: "PingFang SC Light";
        font-size: 1.125em;
        justify-content: center;
        align-items: flex-end;
    }
`;

const Location = (props)=>{
    const { className, leftText, rightText } = props;
    return (
        <div className={className}>
            <div className="leftText">
                <b>{leftText}</b></div>
            <div className="rightText">{rightText}</div>
        </div>
    )
};

const SLocation = styled(Location)`
    display: flex;
    width: 280px;
    color: #ffffff;
    height: 100%;
    padding-top: 38px;
    justify-content: center;
    
    
    .leftText {
        font-weight: 800;
        font-size: 20px;
        font-family: "PingFang SC Regular";
    }
    
    .rightText {
        margin-left: 10px;
        font-size: 20px;
        font-family: "PingFang SC Light";
    }
`;

class Services extends React.PureComponent {

    constructor(props) {
        super(props);

    }

    render(){
        const { className, content, location } = this.props;

        console.log('here')

        let locationDiv = <div className="location">
            <SLocation leftText="美国" rightText="洛杉矶绿地中心"/>
            <SLocation leftText="中国" rightText="深圳科技园"/>
            <SLocation leftText="中国" rightText="成都华侨城"/>
        </div>;

        if(window.innerHeight<640) {
            locationDiv = null;
        }

        return (
            <div className={className} >
                <div className="upper-wrapper">
                    <div className="tittle">我们的服务包含</div>
                    <div className="tabs">
                        <Stab background={p1} backgroundu={p11} width="5vw" height="4vw" size="80px auto" x="60px" y="10px" text="品牌设计" />
                        <Stab background={p2} backgroundu={p22} width="5vw" height="4vw" size="120px auto" x="20px" y="10px" text="网页设计开发" />
                        <Stab background={p3} backgroundu={p33} width="5vw" height="4vw" size="120px auto" x="10px" y="10px" text="小程序设计开发" />
                        <Stab background={p4} backgroundu={p44} width="5vw" height="4vw" size="100px auto" x="10px" y="30px" text="演讲设计" />
                        <Stab background={p5} backgroundu={p55} width="5vw" height="4vw" size="100px auto" x="10px" y="0px" text="印刷品设计" />
                    </div>
                    <div className="middle-text">
                        产品孵化及其它项目请咨询市场部
                    </div>
                </div>
                {locationDiv}
                <DownArrow className="down-arrow" timeOut={0} />
            </div>
        )
    }
};

export default styled(Services)`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    min-height: 667px;
    
    & .upper-wrapper {
        display: flex;
        justify-content: center;
        position: absolute;
        top: calc(20vh + 44px);
        height: 314px;
        flex-direction: column;
        align-items: center;
    }
    
    & .tittle {
        font-size: 24px;
        font-family: "LiSongPro";
    }

    & .tabs {
        display: flex;
        flex-direction: row;
        margin-top: 56px;
        width: 1010px;
        justify-content: space-between;
        height: 100%;
    }
    
    & .middle-text {
        font-size: 14px;
        margin-top: 76px;
        font-family: "PingFang SC Light";
        color: #D8D8D8;
    }
    
    & .location {
        display: flex;
        flex-direction: row;
        justify-content: center;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 161px;
        background-color: #262626
    }
    
    & .down-arrow {
        position: absolute;
        bottom: 10px;
    }
  
`;
